## About IntelliCode
The Visual Studio IntelliCode family of extensions provides AI-assisted development features for Python, TypeScript/JavaScript, C# and Java developers in Visual Studio Code, with insights based on understanding your code context combined with machine learning.

## This extension provides IntelliCode member ranking & whole-line autocomplete for C# Dev Kit users
This specific extension provides predictions of up to a whole-line of code, along with ranking methods and properties in the IntelliSense list for C# Dev Kit users. In order to use this extension, you must have both the C# Dev Kit and .NET 6 installed and enabled on your machine.

## Predictions of up to a whole line of C# are shown as grey text.

Scenario 1: When grey-text is shown, simply press `TAB` to accept the prediction.

![When whole-line autocompletion is offered, users can press TAB to accept the prediction, or Ctrl + Right Arrow to accept the first token/word of the prediction](https://aka.ms/intellicode-devkit-1)

Scenario 2: When grey-text is shown along with the IntelliSense list, press `TAB` to accept the IntelliSense list selection, then `TAB` again to accept the rest of the multi-token prediction. In this scenario, you can use the IntelliSense list selection to steer the multi-token prediction offered by IntelliCode. 

![When whole-line autocompletion is offered along with the IntelliSense list, the IntelliSense list selection informs the whole-line completion](https://aka.ms/intellicode-devkit-2)

Additionally, if the model is suggesting that a string should exist, but does not have a suggestion for the string, hitting `TAB` will place the cursor into the empty string, making it easier for you to complete  your line of code.

## Ranks methods and properties in the IntelliSense list with stars
This extension provides AI-assisted IntelliSense by showing recommended completion items for your code context at the top of the completions list.

![When available, IntelliCode ranks the  IntelliSense list by placing the most relevant items first](https://aka.ms/intellicode-devkit-3)

When it comes to overloads, rather than taking the time to cycle through the alphabetical list of member, IntelliCode presents the most relevant items first. This extension not only ranks known methods, but its deep learning model also ranks methods that are unique to your code.

To see AI-assisted ranking in the IntelliSense list, users must be in a C# file that is a part of a solution. C# files that aren’t a part of a solution won’t have this functionality available.

## Security & Privacy
All your code stays local – the model runs right on your computer, so there’s no need to transmit code to a remote server for custom model training. This is enabled by our machine learning system design, which led to dramatically reduced memory footprint and improved inference speed.

## Supported Platforms
ARM and x64 versions of Windows, Mac OS X, and Linux are supported.
For additional information on testing, visit the docs.

## How do I report feedback & issues
You can file an issue on our IntelliCode for VS Code extension [GitHub feedback repo](https://github.com/MicrosoftDocs/intellicode/issues).