#!/bin/bash
echo "=== Starting Next.js Deployment ==="

# Navigate to the repository directory
cd /home/datapant/nextjs-app

# Install dependencies
echo "Installing dependencies..."
npm install --production

# Build the Next.js application
echo "Building Next.js app..."
npm run build

# Export static files
echo "Exporting static files..."
npm run export

# Check if export was successful
if [ ! -d "out" ]; then
  echo "ERROR: Export failed - 'out' directory not found"
  exit 1
fi

# Backup current public_html
echo "Creating backup..."
cp -r /home/datapant/public_html /home/datapant/public_html_backup_$(date +%Y%m%d_%H%M%S)

# Clear public_html (preserve important files)
echo "Clearing public_html..."
find /home/datapant/public_html -mindepth 1 \
  -not -name '.htaccess' \
  -not -name 'cgi-bin' \
  -not -name 'error_log' \
  -not -name '.well-known' \
  -delete

# Copy built files to public_html
echo "Copying files to public_html..."
cp -r out/* /home/datapant/public_html/

echo "=== Deployment completed successfully! ==="