// // For App Router: app/api/schedule-call/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// // Rate limiting (simple in-memory store - use Redis for production)
// const rateLimit = new Map();

// // Input validation
// const validateInput = (data: any) => {
//   const errors: string[] = [];
  
//   if (!data.name || data.name.trim().length < 2) {
//     errors.push('Name is required and must be at least 2 characters');
//   }
  
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!data.email || !emailRegex.test(data.email)) {
//     errors.push('Valid email address is required');
//   }
  
//   if (data.phone && data.phone.length > 0) {
//     const phoneRegex = /^[\+\-\s\(\)\d]+$/;
//     if (!phoneRegex.test(data.phone)) {
//       errors.push('Invalid phone number format');
//     }
//   }
  
//   return errors;
// };

// // Sanitize input to prevent XSS
// const sanitizeInput = (input: string) => {
//   if (typeof input !== 'string') return input;
//   return input
//     .replace(/</g, '&lt;')
//     .replace(/>/g, '&gt;')
//     .replace(/"/g, '&quot;')
//     .replace(/'/g, '&#x27;')
//     .trim();
// };

// // Simple rate limiting
// const checkRateLimit = (ip: string) => {
//   const now = Date.now();
//   const windowMs = 15 * 60 * 1000; // 15 minutes
//   const maxRequests = 5;

//   if (!rateLimit.has(ip)) {
//     rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
//     return true;
//   }

//   const limit = rateLimit.get(ip);
//   if (now > limit.resetTime) {
//     rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
//     return true;
//   }

//   if (limit.count >= maxRequests) {
//     return false;
//   }

//   limit.count++;
//   return true;
// };

// // Create nodemailer transporter
// const createTransporter = () => {
//   return nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_APP_PASSWORD,
//     },
//     tls: {
//       rejectUnauthorized: false
//     }
//   });
// };

// // Generate email templates
// const generateEmailTemplate = (data: any) => {
//   const timeMapping: { [key: string]: string } = {
//     'morning': 'Morning (9 AM - 12 PM)',
//     'afternoon': 'Afternoon (12 PM - 5 PM)',
//     'evening': 'Evening (5 PM - 8 PM)'
//   };

//   return {
//     // Email to your company
//     toCompany: {
//       subject: `New Call Request from ${data.name}`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>
//             body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
//             .header { background: #16a34a; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
//             .content { background: #f9fafb; padding: 20px; }
//             .detail-box { background: white; margin: 10px 0; padding: 15px; border-radius: 6px; border-left: 4px solid #16a34a; }
//             .footer { background: #374151; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; }
//             .priority { background: #fef3c7; padding: 10px; border-radius: 6px; margin: 10px 0; border-left: 4px solid #f59e0b; }
//             h2, h3 { margin-top: 0; }
//             p { margin: 8px 0; }
//             a { color: #16a34a; text-decoration: none; }
//             a:hover { text-decoration: underline; }
//           </style>
//         </head>
//         <body>
//           <div class="header">
//             <h2>New Call Scheduling Request</h2>
//             <p>A potential client has requested a consultation call</p>
//           </div>
          
//           <div class="content">
//             <div class="priority">
//               <strong>Action Required:</strong> Please reach out to schedule the call within 24 hours for best response rate.
//             </div>

//             <div class="detail-box">
//               <h3>Contact Information</h3>
//               <p><strong>Name:</strong> ${data.name}</p>
//               <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
//               ${data.phone ? `<p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>` : ''}
//               ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
//             </div>

//             ${data.preferredTime ? `
//             <div class="detail-box">
//               <h3>Preferred Time</h3>
//               <p>${timeMapping[data.preferredTime] || data.preferredTime}</p>
//             </div>
//             ` : ''}

//             ${data.message ? `
//             <div class="detail-box">
//               <h3>Project Details</h3>
//               <p style="white-space: pre-wrap;">${data.message}</p>
//             </div>
//             ` : ''}

//             <div class="detail-box">
//               <h3>Submission Details</h3>
//               <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
//               <p><strong>Source:</strong> Website Services Page</p>
//             </div>
//           </div>

//           <div class="footer">
//             <p><strong>Next Steps:</strong> Reply to this email or call the client within 24 hours</p>
//             <p><small>This email was generated automatically from your website contact form</small></p>
//           </div>
//         </body>
//         </html>
//       `
//     },

//     // Confirmation email to client
//     toClient: {
//       subject: `Call Request Received - We'll Contact You Soon!`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>
//             body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
//             .header { background: #16a34a; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
//             .content { background: #f9fafb; padding: 20px; }
//             .info-box { background: white; margin: 15px 0; padding: 20px; border-radius: 6px; }
//             .footer { background: #374151; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; }
//             .highlight { background: #dcfce7; padding: 15px; border-radius: 6px; border-left: 4px solid #16a34a; margin: 15px 0; }
//             h2, h3 { margin-top: 0; }
//             p { margin: 8px 0; }
//             ul { margin: 8px 0; padding-left: 20px; }
//             li { margin: 4px 0; }
//           </style>
//         </head>
//         <body>
//           <div class="header">
//             <h2>Thank You, ${data.name}!</h2>
//             <p>Your call request has been received</p>
//           </div>
          
//           <div class="content">
//             <div class="highlight">
//               <strong>What's Next?</strong><br>
//               Our team will review your request and contact you within 24 hours to schedule your consultation call.
//             </div>

//             <div class="info-box">
//               <h3>Your Request Summary</h3>
//               ${data.preferredTime ? `<p><strong>Preferred Time:</strong> ${timeMapping[data.preferredTime] || data.preferredTime}</p>` : ''}
//               <p><strong>Contact Email:</strong> ${data.email}</p>
//               ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
//               <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
//             </div>

//             <div class="info-box">
//               <h3>What to Expect</h3>
//               <ul>
//                 <li>We'll contact you within 24 hours</li>
//                 <li>Discussion about your data challenges and goals</li>
//                 <li>Customized solutions for your business needs</li>
//                 <li>Next steps and timeline planning</li>
//               </ul>
//             </div>

//             <div class="info-box">
//               <h3>Questions?</h3>
//               <p>If you have any immediate questions, feel free to reply to this email or contact us directly.</p>
//             </div>
//           </div>

//           <div class="footer">
//             <p><strong>Thank you for your interest in Data Panther!</strong></p>
//             <p><small>This is an automated confirmation email</small></p>
//           </div>
//         </body>
//         </html>
//       `
//     }
//   };
// };

// // Main POST handler
// export async function POST(request: NextRequest) {
//   try {
//     // Check if environment variables are set
//     if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
//       console.error('Missing environment variables');
//       return NextResponse.json(
//         {
//           success: false,
//           message: 'Server configuration error. Please contact support.'
//         },
//         { status: 500 }
//       );
//     }

//     // Get client IP for rate limiting
//     const forwarded = request.headers.get('x-forwarded-for');
//     const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
    
//     // Check rate limit
//     if (!checkRateLimit(ip)) {
//       return NextResponse.json(
//         { 
//           success: false, 
//           message: 'Too many requests. Please try again later.' 
//         },
//         { status: 429 }
//       );
//     }

//     // Parse request body
//     const body = await request.json();
    
//     // Sanitize all inputs
//     const sanitizedData = {
//       name: sanitizeInput(body.name || ''),
//       email: sanitizeInput(body.email || ''),
//       phone: sanitizeInput(body.phone || ''),
//       company: sanitizeInput(body.company || ''),
//       preferredTime: sanitizeInput(body.preferredTime || ''),
//       message: sanitizeInput(body.message || '')
//     };

//     // Validate inputs
//     const validationErrors = validateInput(sanitizedData);
//     if (validationErrors.length > 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: 'Validation failed',
//           errors: validationErrors
//         },
//         { status: 400 }
//       );
//     }

//     // Create email transporter
//     const transporter = createTransporter();

//     // Verify transporter configuration
//     try {
//       await transporter.verify();
//     } catch (smtpError) {
//       console.error('SMTP verification failed:', smtpError);
//       return NextResponse.json(
//         {
//           success: false,
//           message: 'Email service configuration error. Please try again later.'
//         },
//         { status: 500 }
//       );
//     }

//     // Generate email templates
//     const emailTemplates = generateEmailTemplate(sanitizedData);

//     // Send email to your company
//     const companyEmailOptions = {
//       from: `"Data Panther Contact Form" <${process.env.GMAIL_USER}>`,
//       to: process.env.COMPANY_EMAIL || process.env.GMAIL_USER,
//       replyTo: sanitizedData.email,
//       ...emailTemplates.toCompany
//     };

//     // Send confirmation email to client
//     const clientEmailOptions = {
//       from: `"Data Panther" <${process.env.GMAIL_USER}>`,
//       to: sanitizedData.email,
//       ...emailTemplates.toClient
//     };

//     // Send both emails
//     await Promise.all([
//       transporter.sendMail(companyEmailOptions),
//       transporter.sendMail(clientEmailOptions)
//     ]);

//     console.log('Call scheduling emails sent successfully:', {
//       to: sanitizedData.email,
//       name: sanitizedData.name,
//       timestamp: new Date().toISOString()
//     });

//     return NextResponse.json({
//       success: true,
//       message: 'Call request submitted successfully! We\'ll contact you within 24 hours.'
//     });

//   } catch (error) {
//     console.error('Error sending call scheduling emails:', error);
    
//     return NextResponse.json(
//       {
//         success: false,
//         message: 'There was an error processing your request. Please try again or contact us directly.'
//       },
//       { status: 500 }
//     );
//   }
// }

// // Handle other HTTP methods
// export async function GET() {
//   return NextResponse.json({
//     message: 'API route is working',
//     timestamp: new Date().toISOString()
//   });
// }

// app/api/schedule-call/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Type definitions
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  preferredTime: string;
}

// Rate limiting store
const rateLimit = new Map<string, { count: number; resetTime: number }>();

// Input validation
const validateInput = (data: FormData) => {
  const errors: string[] = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name is required and must be at least 2 characters');
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Valid email address is required');
  }
  
  return errors;
};

// Sanitize input
const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
};

// Rate limiting check
const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

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

// Send email function
const sendEmails = async (data: FormData) => {
  try {
    // Dynamic import to avoid initialization issues
    const nodemailer = await import('nodemailer');
    
    console.log('Creating email transporter...');
    
    const transporter = nodemailer.default.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('SMTP verification successful');

    const timeMapping: { [key: string]: string } = {
      'morning': 'Morning (9 AM - 12 PM)',
      'afternoon': 'Afternoon (12 PM - 5 PM)',
      'evening': 'Evening (5 PM - 8 PM)'
    };

    // Company notification email
    const companyEmail = {
      from: `"Data Panther Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.COMPANY_EMAIL || process.env.GMAIL_USER,
      replyTo: data.email,
      subject: `New Call Request from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #16a34a; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">New Call Request</h2>
            <p style="margin: 10px 0 0 0;">New consultation request from your website</p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px;">
            <div style="background: #fef3c7; padding: 15px; border-radius: 6px; margin-bottom: 20px; border-left: 4px solid #f59e0b;">
              <strong>Action Required:</strong> Please contact within 24 hours for best response rate.
            </div>

            <div style="background: white; padding: 15px; border-radius: 6px; margin: 15px 0; border-left: 4px solid #16a34a;">
              <h3 style="margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
              ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
            </div>

            ${data.preferredTime ? `
            <div style="background: white; padding: 15px; border-radius: 6px; margin: 15px 0; border-left: 4px solid #16a34a;">
              <h3 style="margin-top: 0;">Preferred Time</h3>
              <p>${timeMapping[data.preferredTime] || data.preferredTime}</p>
            </div>
            ` : ''}

            ${data.message ? `
            <div style="background: white; padding: 15px; border-radius: 6px; margin: 15px 0; border-left: 4px solid #16a34a;">
              <h3 style="margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap;">${data.message}</p>
            </div>
            ` : ''}

            <div style="background: white; padding: 15px; border-radius: 6px; margin: 15px 0; border-left: 4px solid #16a34a;">
              <h3 style="margin-top: 0;">Submission Details</h3>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              <p><strong>Source:</strong> Website Contact Form</p>
            </div>
          </div>

          <div style="background: #374151; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="margin: 0;"><strong>Next Steps:</strong> Reply to this email or call the client within 24 hours</p>
          </div>
        </div>
      `
    };

    // Client confirmation email
    const clientEmail = {
      from: `"Data Panther" <${process.env.GMAIL_USER}>`,
      to: data.email,
      subject: 'Call Request Received - We\'ll Contact You Soon!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #16a34a; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="margin: 0;">Thank You, ${data.name}!</h2>
            <p style="margin: 10px 0 0 0;">Your call request has been received</p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px;">
            <div style="background: #dcfce7; padding: 15px; border-radius: 6px; border-left: 4px solid #16a34a; margin-bottom: 20px;">
              <strong>What's Next?</strong><br>
              Our team will review your request and contact you within 24 hours to schedule your consultation call.
            </div>

            <div style="background: white; padding: 20px; border-radius: 6px; margin: 15px 0;">
              <h3 style="margin-top: 0;">Your Request Summary</h3>
              ${data.preferredTime ? `<p><strong>Preferred Time:</strong> ${timeMapping[data.preferredTime] || data.preferredTime}</p>` : ''}
              <p><strong>Contact Email:</strong> ${data.email}</p>
              ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>

            <div style="background: white; padding: 20px; border-radius: 6px; margin: 15px 0;">
              <h3 style="margin-top: 0;">What to Expect</h3>
              <ul>
                <li>We'll contact you within 24 hours</li>
                <li>Discussion about your data challenges and goals</li>
                <li>Customized solutions for your business needs</li>
                <li>Next steps and timeline planning</li>
              </ul>
            </div>
          </div>

          <div style="background: #374151; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="margin: 0;"><strong>Thank you for your interest in Data Panther!</strong></p>
          </div>
        </div>
      `
    };

    // Send both emails
    console.log('Sending emails...');
    await Promise.all([
      transporter.sendMail(companyEmail),
      transporter.sendMail(clientEmail)
    ]);

    console.log('Emails sent successfully');
    return true;

  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

// Main POST handler
export async function POST(request: NextRequest) {
  console.log('=== Schedule Call API Called ===');
  
  try {
    // Environment variables check
    console.log('Environment check:', {
      hasGmailUser: !!process.env.GMAIL_USER,
      hasGmailPassword: !!process.env.GMAIL_APP_PASSWORD,
      hasCompanyEmail: !!process.env.COMPANY_EMAIL
    });

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing required environment variables');
      return NextResponse.json(
        { success: false, message: 'Server configuration error. Please contact support.' },
        { status: 500 }
      );
    }

    // Rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    let body: FormData;
    try {
      body = await request.json();
      console.log('Request body received:', { name: body.name, email: body.email });
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return NextResponse.json(
        { success: false, message: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData: FormData = {
      name: sanitizeInput(body.name || ''),
      email: sanitizeInput(body.email || ''),
      phone: sanitizeInput(body.phone || ''),
      company: sanitizeInput(body.company || ''),
      preferredTime: sanitizeInput(body.preferredTime || ''),
      message: sanitizeInput(body.message || '')
    };

    // Validate inputs
    const validationErrors = validateInput(sanitizedData);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: validationErrors },
        { status: 400 }
      );
    }

    // Send emails
    await sendEmails(sanitizedData);

    console.log('Success! Emails sent for:', sanitizedData.email);

    return NextResponse.json({
      success: true,
      message: 'Call request submitted successfully! We\'ll contact you within 24 hours.'
    });

  } catch (error) {
    console.error('API Error:', error);
    
    return NextResponse.json(
      { success: false, message: 'There was an error processing your request. Please try again.' },
      { status: 500 }
    );
  }
}

// GET handler for testing
export async function GET() {
  return NextResponse.json({
    message: 'Schedule Call API is working',
    timestamp: new Date().toISOString(),
    environment: {
      hasGmailUser: !!process.env.GMAIL_USER,
      hasGmailPassword: !!process.env.GMAIL_APP_PASSWORD,
      hasCompanyEmail: !!process.env.COMPANY_EMAIL
    }
  });
}