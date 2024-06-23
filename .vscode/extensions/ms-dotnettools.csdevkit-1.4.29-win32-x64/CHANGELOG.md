# Change Log

## Current Prerelease version
### Fixed
- Bug Fixes

### Removed
- IntellICode extension from auto Downloading

## v1.4.2 - Prerelease
### Fixed
- [Improve readme content for readability](https://github.com/microsoft/vscode-dotnettools/issues/761)

## v1.3.8 - Release
### Fixed
- Restarting debug session for Blazor WebAssembly projects
- [Hot Reload not working .NET 8 on WSL](https://github.com/microsoft/vscode-dotnettools/issues/794)
- [Deleting a TestMethod throws and error until Text Explorer refreshes tests ](https://github.com/microsoft/vscode-dotnettools/issues/661)
- [Add possibility to provide settings to define .runsettings or arguments for unit test execution with C# Dev Kit](https://github.com/microsoft/vscode-dotnettools/issues/156)
- [Add FAQ link to notification of project type support](https://github.com/microsoft/vscode-dotnettools/issues/710)

### Added
- Auto open Solution Explorer to increase discoverability

## v1.3.8 - Prerelease
- Bug fixes

## v1.3.6 - Prerelease
### Fixed
- Restarting debug session for Blazor WebAssembly projects

### Added
- Auto open Solution Explorer to increase discoverability


## v1.3.2 - Prerelease
### Fixed
- [Hot Reload not working .NET 8 on WSL](https://github.com/microsoft/vscode-dotnettools/issues/794)
- [Deleting a TestMethod throws and error until Text Explorer refreshes tests ](https://github.com/microsoft/vscode-dotnettools/issues/661)
- [Add possibility to provide settings to define .runsettings or arguments for unit test execution with C# Dev Kit](https://github.com/microsoft/vscode-dotnettools/issues/156)
- [Add FAQ link to notification of project type support](https://github.com/microsoft/vscode-dotnettools/issues/710)

## v1.2.7 - Release
### Fixed
- Enable open solution on explorer for easier discovery
- [Run and Debug ignores environmentVariables in launchSettings.json](https://github.com/microsoft/vscode-dotnettools/issues/608)
- [C# Web API cannot connect to the server](https://github.com/microsoft/vscode-dotnettools/issues/718)
- [Latest Pre-Release cannot debug Blazor Web App](https://github.com/microsoft/vscode-dotnettools/issues/696)
- [Debugger should default to integratedTerminal when launching a console app without debugging](https://github.com/microsoft/vscode-dotnettools/issues/606)
- [Restart debugging doesn't rebuild the project](https://github.com/microsoft/vscode-dotnettools/issues/496)

## v1.2.5 - Prerelease
### Fixed
- Enable open solution on explorer for easier discovery

## v1.2.2 - Prerelease
###Fixed
- [Run and Debug ignores environmentVariables in launchSettings.json](https://github.com/microsoft/vscode-dotnettools/issues/608)
- [C# Web API cannot connect to the server](https://github.com/microsoft/vscode-dotnettools/issues/718)
- [Latest Pre-Release cannot debug Blazor Web App](https://github.com/microsoft/vscode-dotnettools/issues/696)
- [Debugger should default to integratedTerminal when launching a console app without debugging](https://github.com/microsoft/vscode-dotnettools/issues/606)
- [Restart debugging doesn't rebuild the project](https://github.com/microsoft/vscode-dotnettools/issues/496)

## v1.1.16 - Release

### Fixed
- [Run and Debug ignores environmentVariables in launchSettings.json](https://github.com/microsoft/vscode-dotnettools/issues/608)
- Updated Readme to change the name of .NET Install Tool
- Added New Project template types to Create .NET Project list
- [Old tests shown after renaming test folder/project](https://github.com/microsoft/vscode-dotnettools/issues/645)
- [Configuring a logpoint including variables after a breakpoint breaks the debugging session](https://github.com/microsoft/vscode-dotnettools/issues/583)


## v1.1.5 - Prerelease

## Fixed
- Added New Project template types to Create .NET Project list

## v1.0.14 - Release

## Fixed
- [Debugger should better handle Console.Read APIs with internalConsole](https://github.com/dotnet/vscode-csharp/issues/5704)
- [Terminal should always appear on top of the debug console when using integrated terminal](https://github.com/dotnet/vscode-csharp/issues/6516)
- [Debugger should default to integratedTerminal when launching a console app without debugging](https://github.com/microsoft/vscode-dotnettools/issues/606)
- [A valid browser not found when debugging from Codespaces](https://github.com/microsoft/vscode-dotnettools/issues/560)
- [Getting started instructions should include restart device](https://github.com/microsoft/vscode-dotnettools/issues/268)


## v1.0.12 - Prerelease

## Fixed
- [Debugger should better handle Console.Read APIs with internalConsole](https://github.com/dotnet/vscode-csharp/issues/5704)
- [Terminal should always appear on top of the debug console when using integrated terminal](https://github.com/dotnet/vscode-csharp/issues/6516)
- [Debugger should default to integratedTerminal when launching a console app without debugging](https://github.com/microsoft/vscode-dotnettools/issues/606)
- [A valid browser not found when debugging from Codespaces](https://github.com/microsoft/vscode-dotnettools/issues/560)
- [Getting started instructions should include restart device](https://github.com/microsoft/vscode-dotnettools/issues/268)

## v1.0.4

 - Bug fixes and version number increase

## v0.6.3 - Prerelease

### Fixed
- Debugger improvements

## v0.5.150 - Release

### Added
- **Edit and Continue/Hot Reload Support** (Added support for Edit and Continue (EnC) and Hot Reload when debugging managed applications with the C# dev kit. Please note that EnC/Hot Reload debugging on Mac and Linux requires .NET 8 RC1 and above. In order to start using this feature, enable the csharp.experimental.debug.hotReload setting.)
- Localized Add Project tags
- Add support for listing projects in relative paths


### Fixed
- [Intellisense does not apply to new file until I restart VS Code](https://github.com/microsoft/vscode-dotnettools/issues/525)
- [Run button does not work](https://github.com/microsoft/vscode-dotnettools/issues/505)
- [Unable to watch for changes in this large workspace folder ](https://github.com/microsoft/vscode-dotnettools/issues/360)
- [.NET: Clean with terminal profile that already contains -Command parameter.](https://github.com/microsoft/vscode-dotnettools/issues/117)
- [Unable to apply environment variable settings from launchSettings.json](https://github.com/microsoft/vscode-dotnettools/issues/241)
- [Run without debugging does not launches browser for BlazorWasmApp](https://github.com/microsoft/vscode-dotnettools/issues/259)
- [.ts files do not appear in solution explorer with Microsoft.TypeScript.MSBuild](https://github.com/microsoft/vscode-dotnettools/issues/412)
- [Add new file failed from Solution Explorer](https://github.com/microsoft/vscode-dotnettools/issues/500)
- [Variable $(SolutionDir) is *Undefined* during build events](https://github.com/microsoft/vscode-dotnettools/issues/114)
- [Adding Razor page doesn't use correct default namespace or ask me for name of page](https://github.com/microsoft/vscode-dotnettools/issues/95)
- [Tests are removed from test explorer after changes to test files](https://github.com/microsoft/vscode-dotnettools/issues/460)
- [Add new file failed from Solution Explorer.](https://github.com/microsoft/vscode-dotnettools/issues/500)
- [Problem if Solution is not in same directory as main csproj](https://github.com/microsoft/vscode-dotnettools/issues/537)

## v0.5.127 - Prerelease

### Fixed
- [Tests are removed from test explorer after changes to test files](https://github.com/microsoft/vscode-dotnettools/issues/460)
- [Add new file failed from Solution Explorer.](https://github.com/microsoft/vscode-dotnettools/issues/500)
- [Problem if Solution is not in same directory as main csproj](https://github.com/microsoft/vscode-dotnettools/issues/537)

## v0.5.98 - Prerelease

### Fixed
- [Intellisense does not apply to new file until I restart VS Code](https://github.com/microsoft/vscode-dotnettools/issues/525)
- [Run button does not work](https://github.com/microsoft/vscode-dotnettools/issues/505)
- [Unable to watch for changes in this large workspace folder ](https://github.com/microsoft/vscode-dotnettools/issues/360)
- [.NET: Clean with terminal profile that already contains -Command parameter.](https://github.com/microsoft/vscode-dotnettools/issues/117)

## v0.5.47 - Prerelease

### Added
- Localized Add Project tags

### Fixed
- [Unable to apply environment variable settings from launchSettings.json](https://github.com/microsoft/vscode-dotnettools/issues/241)
- [Run without debugging does not launches browser for BlazorWasmApp](https://github.com/microsoft/vscode-dotnettools/issues/259)
- [.ts files do not appear in solution explorer with Microsoft.TypeScript.MSBuild](https://github.com/microsoft/vscode-dotnettools/issues/412)
- [Add new file failed from Solution Explorer](https://github.com/microsoft/vscode-dotnettools/issues/500)

## v0.5.24 - Prerelease

### Fixed
- Mac specific project build/load issues

## v0.5.2 - Prerelease

### Added
- Add support for listing projects in relative paths
- Hot Reload support

### Fixed
- [Variable $(SolutionDir) is *Undefined* during build events](https://github.com/microsoft/vscode-dotnettools/issues/114)
- [Adding Razor page doesn't use correct default namespace or ask me for name of page](https://github.com/microsoft/vscode-dotnettools/issues/95)

## v0.4.10 - Release

### Added
- [Add Project Reference in Solution Explorer](https://github.com/microsoft/vscode-dotnettools/issues/47)

### Fixed
- [Output window is opened automatically every time VS Code starts](https://github.com/microsoft/vscode-dotnettools/issues/192)
- [Walkthrough fails to launch on mac](https://github.com/microsoft/vscode-dotnettools/issues/155)
- [C# Dev Kit still Downloading the .NET Runtime when i Using configured](https://github.com/microsoft/vscode-dotnettools/issues/396)
- [Run all tests in file in multi-targeted project builds entire solution](https://github.com/microsoft/vscode-dotnettools/issues/265)
- [Test Explorer Not Working for projects with alternate outputs specified](https://github.com/microsoft/vscode-dotnettools/issues/28)
- [Test Explorer displaying duplicate tests](https://github.com/microsoft/vscode-dotnettools/issues/217)
- [No C# project is currently loaded when .NET 8 Preview 7 is present](https://github.com/microsoft/vscode-dotnettools/issues/318)
- [.NET Server crashing with CultureNotFoundException](https://github.com/microsoft/vscode-dotnettools/issues/386)
- [Improved reliability of .NET runtime discovery on startup](https://github.com/microsoft/vscode-dotnettools/issues/332)
- Ensure empty folders stay in project after last file is deleted
- [Throw error message for invalid characters in file name](https://github.com/microsoft/vscode-dotnettools/issues/280)

## v0.4.8 - Prerelease

### Fixed
- Ensure empty folders stay in project after last file is deleted
- [Throw error message for invalid characters in file name](https://github.com/microsoft/vscode-dotnettools/issues/280)

## v0.4.6 - Prerelease

### Fixed
- [.NET Server crashing with CultureNotFoundException](https://github.com/microsoft/vscode-dotnettools/issues/386)
- [Improved reliability of .NET runtime discovery on startup](https://github.com/microsoft/vscode-dotnettools/issues/332)

## v0.4.5 - Prerelease

### Fixed
- [Walkthrough fails to launch on mac](https://github.com/microsoft/vscode-dotnettools/issues/155)
- [C# Dev Kit still Downloading the .NET Runtime when i Using configured](https://github.com/microsoft/vscode-dotnettools/issues/396)
- [Run all tests in file in multi-targeted project builds entire solution](https://github.com/microsoft/vscode-dotnettools/issues/265)
- [Test Explorer Not Working for projects with alternate outputs specified](https://github.com/microsoft/vscode-dotnettools/issues/28)
- [Test Explorer displaying duplicate tests](https://github.com/microsoft/vscode-dotnettools/issues/217)
- [No C# project is currently loaded when .NET 8 Preview 7 is present](https://github.com/microsoft/vscode-dotnettools/issues/318)

## v0.4.2 - Prerelease

### Added
- [Add Project Reference in Solution Explorer](https://github.com/microsoft/vscode-dotnettools/issues/47)

### Fixed
- [Output window is opened automatically every time VS Code starts](https://github.com/microsoft/vscode-dotnettools/issues/192)

## v0.3.21 - Release

### Fixed
- Improvements in Test Discovery
- [Don't know how to launch profile 'IIS Express'; the commandName 'IISExpress' is not supported. #90](https://github.com/microsoft/vscode-dotnettools/issues/90)
- [Improve license details (subscription) in README #134](https://github.com/microsoft/vscode-dotnettools/issues/134)
- [Enabling solution wide analysis attempts to compute diagnostics for non-source files #209](https://github.com/microsoft/vscode-dotnettools/issues/209)
- [Intellisense and syntrax highlighting intermittent when C# Dev Kit is installed #210](https://github.com/microsoft/vscode-dotnettools/issues/210)

## v0.3.18 - Prerelease

- Bug fixes

## v0.3.5 - Prerelease

### Fixed

- Removing system assemblies from some of the project system server package
- Improvements in Test Discovery
- Improvements in telemetry

## v0.3.2 - Prerelease

### Fixed
- [Don't know how to launch profile 'IIS Express'; the commandName 'IISExpress' is not supported. #90](https://github.com/microsoft/vscode-dotnettools/issues/90)
- [Improve license details (subscription) in README #134](https://github.com/microsoft/vscode-dotnettools/issues/134)
- [Enabling solution wide analysis attempts to compute diagnostics for non-source files #209](https://github.com/microsoft/vscode-dotnettools/issues/209)
- [Intellisense and syntrax highlighting intermittent when C# Dev Kit is installed #210](https://github.com/microsoft/vscode-dotnettools/issues/210)

## v0.2.100 - Release

### Fixed
- Improved Readme text
- Reduce Logging
- Support spacing in paths

## v0.2.99 - Prerelease

- Bug fixes

## v0.2.70 - Prerelease

- Bug fixes

## v0.1.103 - Release

- Bug fixes

## v0.1.83 - Release

- Initial Release