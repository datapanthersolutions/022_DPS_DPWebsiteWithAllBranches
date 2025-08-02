#!/bin/bash
echo "=== Starting Deployment ==="

# Navigate to repository
cd /home/datapant/nextjs-app

# Install dependencies
echo "Installing dependencies..."
npm install --production

# Build the project
echo "Building project..."
npm run build

# Verify out folder was created
if [ ! -d "out" ]; then
    echo "ERROR: Build failed - no 'out' folder found"
    exit 1
fi

# Clear public_html
echo "Clearing public_html..."
rm -rf /home/datapant/public_html/*

# Copy built files
echo "Copying files to public_html..."
cp -r out/* /home/datapant/public_html/

echo "=== Deployment Complete ==="