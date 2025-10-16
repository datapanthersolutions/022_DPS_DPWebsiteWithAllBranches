
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// console.log('Gmail Email API loaded');
// console.log('Environment check:');
// console.log('- GMAIL_USER:', process.env.GMAIL_USER ? 'SET' : 'NOT SET');
// console.log('- GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? 'SET' : 'NOT SET');
// console.log('- COMPANY_EMAIL:', process.env.COMPANY_EMAIL ? 'SET' : 'NOT SET');
// console.log('- RECAPTCHA_SECRET_KEY:', process.env.RECAPTCHA_SECRET_KEY ? 'SET' : 'NOT SET');

// Rate limiting store
const rateLimit = new Map<string, { count: number; resetTime: number }>();

// Verify reCAPTCHA token
const verifyRecaptcha = async (token: string) => {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.warn('reCAPTCHA secret key not configured, skipping verification');
    return true; // Allow if reCAPTCHA is not configured
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    });

    const result = await response.json();
    // console.log('reCAPTCHA verification result:', result);
    
    // For reCAPTCHA v3, check score (0.0 to 1.0, higher is better)
    return result.success && result.score >= 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
};

// Rate limiting check
const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 3; // 3 submissions per 15 minutes

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  const limit = rateLimit.get(ip)!;
  if (now > limit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (limit.count >= maxRequests) {
    return false;
  }

  limit.count++;
  return true;
};

// Gmail transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Gmail SMTP verification failed:');
    console.error('Error message:', error.message);
    
    if (error.message.includes('Invalid login')) {
      console.error('Authentication Error Solutions:');
      console.error('1. Make sure you\'re using a Gmail App Password, not your regular password');
      console.error('2. Enable 2-Factor Authentication on your Gmail account');
      console.error('3. Generate an App Password: Google Account > Security > 2-Step Verification > App passwords');
      console.error('4. Use the 16-character app password (remove spaces)');
    }
  } else {
    console.log('Gmail SMTP connection verified successfully!');
  }
});

export async function POST(req: Request) {
  console.log('POST request received for Gmail email with reCAPTCHA');
  
  try {
    // Get client IP for rate limiting
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const { fullName, email, message, recaptchaToken } = await req.json();
    console.log('Form data received:', { 
      fullName: fullName ? 'YES' : 'NO', 
      email: email ? 'YES' : 'NO', 
      message: message ? 'YES' : 'NO',
      hasRecaptcha: !!recaptchaToken
    });

    // Validation
    if (!fullName || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Verify reCAPTCHA if token provided
    if (recaptchaToken) {
      const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
      if (!isValidRecaptcha) {
        console.log('reCAPTCHA verification failed');
        return NextResponse.json(
          { error: 'Security verification failed. Please try again.' },
          { status: 400 }
        );
      }
      console.log('reCAPTCHA verification passed');
    }

    // Check environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.COMPANY_EMAIL) {
      console.error('Missing environment variables');
      return NextResponse.json({ 
        error: 'Server configuration error - missing environment variables'
      }, { status: 500 });
    }

    // Sanitize inputs to prevent XSS
    const sanitize = (str: string) => str.replace(/[<>]/g, '');
    const sanitizedName = sanitize(fullName);
    const sanitizedMessage = sanitize(message);

    console.log('Preparing email for Gmail...');
    
    // Email to company
    const companyMailOptions = {
      from: `"Data Panther Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.COMPANY_EMAIL,
      replyTo: `"${sanitizedName}" <${email}>`,
      subject: `New Contact Form Submission from ${sanitizedName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
          <div style="max-width: 600px; margin: 20px auto; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 30px 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 600;">New Contact Form</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Data Panther Website</p>
            </div>
            
            <!-- Content -->
            <div style="background: #ffffff; padding: 30px;">
              
              <!-- Contact Info Card -->
              <div style="background: #f8fafc; border-left: 4px solid #10b981; padding: 20px; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
                <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">Contact Details</h2>
                
                <div style="margin-bottom: 15px;">
                  <strong style="color: #374151;">Name:</strong>
                  <span style="margin-left: 10px; color: #1f2937;">${sanitizedName}</span>
                </div>
                
                <div>
                  <strong style="color: #374151;">Email:</strong>
                  <a href="mailto:${email}" style="margin-left: 10px; color: #10b981; text-decoration: none;">${email}</a>
                </div>
              </div>
              
              <!-- Message Card -->
              <div style="background: #f8fafc; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 16px;">Message</h3>
                <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #d1d5db; min-height: 80px; white-space: pre-wrap; color: #1f2937; line-height: 1.6;">${sanitizedMessage}</div>
              </div>
              
              <!-- Footer Info -->
              <div style="background: #e0f2fe; border-radius: 8px; padding: 15px; font-size: 14px; color: #0f172a;">
                <div style="margin-bottom: 8px;">
                  <strong>Received:</strong>
                  <span style="margin-left: 8px;">${new Date().toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</span>
                </div>
                <div style="margin-bottom: 8px;">
                  <strong>Source:</strong>
                  <span style="margin-left: 8px;">Data Panther Contact Form</span>
                </div>
                ${recaptchaToken ? '<div style="margin-bottom: 8px;"><strong>Security:</strong> <span style="margin-left: 8px; color: #10b981;">Verified by reCAPTCHA</span></div>' : ''}
                <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #cbd5e1; color: #64748b; font-style: italic;">
                  You can reply directly to this email to respond to ${sanitizedName}
                </div>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background: #f1f5f9; padding: 20px; text-align: center; color: #64748b; font-size: 12px;">
              <p style="margin: 0;">This email was automatically generated from your Data Panther website contact form.</p>
            </div>
            
          </div>
        </body>
        </html>
      `,
    };

    // Confirmation email to client
    const clientMailOptions = {
      from: `"Data Panther" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting Data Panther!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Thank you for contacting us</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
          <div style="max-width: 600px; margin: 20px auto; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 30px 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 600;">Thank You, ${sanitizedName}!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">We've received your message</p>
            </div>
            
            <!-- Content -->
            <div style="background: #ffffff; padding: 30px;">
              
              <div style="background: #dcfce7; border-left: 4px solid #10b981; padding: 20px; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
                <strong>What's Next?</strong><br>
                Our team will review your message and get back to you within 24 hours.
              </div>

              <div style="background: #f8fafc; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h3 style="margin: 0 0 15px 0; color: #1f2937;">Your Message Summary</h3>
                <p><strong>From:</strong> ${sanitizedName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Sent:</strong> ${new Date().toLocaleString()}</p>
                <div style="margin-top: 15px; padding: 10px; background: #f3f4f6; border-radius: 4px;">
                  <strong>Your Message:</strong><br>
                  <span style="white-space: pre-wrap;">${sanitizedMessage}</span>
                </div>
              </div>

              <div style="background: #f8fafc; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px;">
                <h3 style="margin: 0 0 15px 0; color: #1f2937;">Questions?</h3>
                <p>If you have any immediate questions, feel free to reply to this email or contact us directly.</p>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background: #f1f5f9; padding: 20px; text-align: center; color: #64748b; font-size: 12px;">
              <p style="margin: 0;">Thank you for your interest in Data Panther!</p>
            </div>
            
          </div>
        </body>
        </html>
      `,
    };

    console.log('Sending emails through Gmail...');

    // Send both emails
    const [companyResult, clientResult] = await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);
    
    console.log('Emails sent successfully through Gmail!');
    console.log('Company email ID:', companyResult.messageId);
    console.log('Client email ID:', clientResult.messageId);

    return NextResponse.json({ 
      message: 'Message sent successfully! We\'ll get back to you within 24 hours.',
      messageId: companyResult.messageId
    });

  } catch (error: any) {
    console.error('Gmail email error:');
    console.error('Error code:', error?.code);
    console.error('Error message:', error?.message);

    // Gmail-specific error handling
    if (error?.code === 'EAUTH' || error?.message?.includes('Invalid login')) {
      return NextResponse.json({ 
        error: 'Gmail authentication failed. Please check your app password.',
      }, { status: 500 });
    }

    if (error?.code === 'ENOTFOUND') {
      return NextResponse.json({ 
        error: 'Cannot connect to Gmail servers',
      }, { status: 500 });
    }

    return NextResponse.json({ 
      error: 'Failed to send email. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error?.message : undefined
    }, { status: 500 });
  }
}

// GET handler for testing
export async function GET() {
  return NextResponse.json({
    message: 'Contact API is working',
    timestamp: new Date().toISOString(),
    environment: {
      hasGmailUser: !!process.env.GMAIL_USER,
      hasGmailPassword: !!process.env.GMAIL_APP_PASSWORD,
      hasCompanyEmail: !!process.env.COMPANY_EMAIL,
      hasRecaptchaSecret: !!process.env.RECAPTCHA_SECRET_KEY
    }
  });
}