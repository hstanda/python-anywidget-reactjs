# React + Python AnyWidget Example

This project demonstrates how to build a custom **Jupyter widget** using [anywidget](https://github.com/manzt/anywidget), with a UI built in **React**.

The widget displays an interactive counter with theme toggling, fully integrated into a Jupyter notebook.

## 🔧 Features

- Built with React 18 using `anywidget`
- Real-time counter with `useState` and `useEffect`
- Light/Dark theme toggle
- Python ↔ JS two-way data binding
- Minimal setup, runs locally or on Colab

## 📁 Project Structure

```
mywidget/
├── widget.py              # Python glue code for the widget
├── example.ipynb          # Jupyter Notebook example
├── requirements.txt       # Python dependencies
├── setup.sh               # Shell script to set up local environment
└── _frontend/
    ├── index.js           # React component
    └── package.json       # JS dependencies
```

## 🚀 Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/your-username/react-python-anywidget.git
cd react-python-anywidget
```

### 2. Run the Setup Script (macOS/Linux)

```bash
chmod +x setup.sh
./setup.sh
```

> This will:
> - Create a virtual environment (`penv`)
> - Install dependencies
> - Launch Jupyter Notebook

### 3. Open and Run `example.ipynb`

- Run both cells in the notebook to see the widget in action.
- The React UI will appear directly in the notebook.

## 🧪 Try It on Google Colab

You can also try this in [Google Colab](https://colab.research.google.com/) — just upload the project folder and open `example.ipynb`.

---

## 🛠 Built With

- [React](https://reactjs.org/)
- [anywidget](https://github.com/manzt/anywidget)
- [Jupyter Notebook](https://jupyter.org/)

## 🧑‍💻 Author

Harjeevan Singh Tanda – [harjeevan.ca](https://www.harjeevan.ca/)

---

## 📄 License

This project is licensed under the MIT License.
