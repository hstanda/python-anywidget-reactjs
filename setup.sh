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
npm install
cd ..

# Optional: enable live hot module reloading (HMR)
# This must be enabled explicitly since anywidget v0.9+
# echo "⚡ Enabling ANYWIDGET_HMR=1 for hot module reloading..."
# export ANYWIDGET_HMR=1

echo "🚀 Launching Jupyter Notebook (editable mode for anywidget front-end)..."
ANYWIDGET_MODE=editable jupyter notebook