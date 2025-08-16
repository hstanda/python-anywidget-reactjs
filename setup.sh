#!/usr/bin/env bash
set -e

echo "🔧 Creating virtual environment 'penv'..."
python3 -m venv penv

echo "✅ Activating virtual environment..."
source penv/bin/activate

echo "📦 Installing Python requirements from requirements.txt..."
pip install --upgrade pip
pip install -r requirements.txt

echo "📦 Installing JavaScript dependencies for the React frontend..."
cd _frontend
echo "🧹 Cleaning up previous installations..."
rm -rf node_modules # Clean up any existing node_modules
echo "🧹 Removing package-lock.json if it exists..."
rm package-lock.json # Clean up any existing package-lock.json
# npm install --legacy-peer-deps # Use --legacy-peer-deps to avoid peer dependency issues
# If you encounter issues with peer dependencies, you can try:
# npm install --force
npm install
cd ..

# Optional: enable live hot module reloading (HMR)
# This must be enabled explicitly since anywidget v0.9+
# echo "⚡ Enabling ANYWIDGET_HMR=1 for hot module reloading..."
# export ANYWIDGET_HMR=1

echo "🚀 Launching Jupyter Notebook (editable mode for anywidget front-end)..."
ANYWIDGET_MODE=editable jupyter notebook