# Nutrition Facts Web App

A web application that allows users to retrieve and compare nutrition facts for different food items using an external API.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Key](#api-key)
- [Styling (CSS)](#styling-css)
- [Behavior (JavaScript)](#behavior-javascript)
  - External JavaScript
  - Injected JavaScript
- [Demo](#Demo)
  
## Introduction

The Nutrition Facts Web App is designed to provide users with information about the nutritional content of various food items. It utilizes the Flask framework for the backend and features a user-friendly web interface for input and data presentation.

## Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository.
   ``` bash
   git clone https://github.com/Abbad04/Nutrition-App.git
   cd nutrition-facts-app
   ```
2. Install required Python packages.
   ``` bash
   pip install -r requirements.txt
   ```

## Usage

1. Run the Flask app.
   ``` bash
   python app.py
   ```
2. Access the web interface by opening a web browser and navigating to the provided URL.
3. Enter a food choice in the input field and click the "Submit" button to retrieve nutrition facts.
4. Click on nutrition fact boxes to select items for comparison.
5. Click the "Compare" button to see a comparison table of nutrition values.

## Features

- Input panel for submitting food choices.
- Retrieving nutrition information using an external API.
- Displaying nutrition facts in a user-friendly web interface.
- Comparing nutrition values of selected food items.

## API Key

To use the external API, obtain an API key by signing up at [ninjaApi](https://api-ninjas.com/). Integrate the API key into the code as described in the `app.py` file.

## Styling (CSS)

The project's CSS file is responsible for styling the web interface. Notable elements include styling for input panels, results headers, results panels, comparison buttons, and more.

## Behavior (JavaScript)

The JavaScript code enhances user interaction and data manipulation. Key functionalities include input validation, toggling classes for selected items, and calculating and presenting nutrition comparisons.

### External JavaScript

The `script.js` file contains the main behavior of the web application. It includes detailed logic for input validation, box selection, and comparison calculations. This external JavaScript file improves code organization and maintainability.

### Injected JavaScript

The JavaScript code injected within the `index.html` file primarily focuses on generating dynamic content based on API responses and user interactions. It retrieves the number of items and nutrition data from the API response, displays appropriate sections, generates box elements for displaying nutrition information, and adds nutritional information to each box.

## Demo

Take a look at it: Abbad04.pythonanywhere.com
