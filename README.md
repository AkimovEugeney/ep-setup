Ep-setup 🚀
===========

**Automated ESLint and Prettier Setup for TypeScript Projects**

🚀 Installation and Usage
-------------------------

### **Without Global Installation (Recommended)**

If you don't want to install ep-setup globally, simply run:

```npx ep-setup```


📌 Description
--------------

ep-setup is a CLI tool that automatically installs and configures **ESLint** and **Prettier** in your project.No more manual setup of configuration files or installing dependencies — just run a single command!

### ✅ What does ep-setup do?

*   Creates configuration files .eslintrc.js and .prettierrc
    
*   Installs necessary dependencies
    
*   Configures **TypeScript**, **Prettier**, **ESLint**, **TailwindCSS** (plugin)
    
*   Adds import sorting
    
*   Prepares your project for clean and consistent code style
    

🔧 Supported Technologies
-------------------------

*   **ESLint** (Code Analysis)
    
*   **Prettier** (Code Formatting)
    
*   **TypeScript** (Strict Typing Support)
    
*   **TailwindCSS** (Plugin for Class Sorting)
    
*   **Import Sorting** (Automatic Import Order in Files)
    

🛠 Requirements
---------------

*   **Node.js 14+**
    
*   **npm** or **yarn**
    

🛠️ How It Works
----------------

1.  Run npx ep-setup in your project directory.
    
2.  The tool will:
    
    *   Install all required dependencies (eslint, prettier, @trivago/prettier-plugin-sort-imports, prettier-plugin-tailwindcss, etc.).
        
    *   Generate .eslintrc.js and .prettierrc configuration files.
        
    *   Configure ESLint and Prettier to work seamlessly with TypeScript and TailwindCSS.
        
3.  You're ready to go! Start coding with a clean and consistent style.
    

🚀 Example
----------

After running npx ep-setup, your project will have:

*   **ESLint** configured for TypeScript.
    
*   **Prettier** with plugins for import sorting and TailwindCSS class sorting.
    
*   A pre-configured .eslintrc.js and .prettierrc file.
    

📂 Generated Files
------------------

*   .eslintrc.js: ESLint configuration for TypeScript.
    
*   .prettierrc: Prettier configuration with plugins for import sorting and TailwindCSS.
    

📜 License
----------

This project is licensed under the MIT License. See the [LICENSE](https://license/) file for details.

🙏 Credits
----------

*   **ESLint**: For code analysis.
    
*   **Prettier**: For code formatting.
    
*   **@trivago/prettier-plugin-sort-imports**: For sorting imports.
    
*   **prettier-plugin-tailwindcss**: For sorting TailwindCSS classes.
    

🚀 Get Started
--------------

Run the following command to set up your project:

```npx ep-setup```

Enjoy clean and consistent code! 🎉