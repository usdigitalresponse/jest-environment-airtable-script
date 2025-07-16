# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.1] - 2025-07-16

### Fixed

- Error when trying to remove secrets from console logs that had non-string parameters.

## [0.2.0] - 2025-05-08

### Added

- Support for new `input.secret` methods.

## [0.1.0] - 2025-03-12

### Added

- Handled thrown errors within script code. Errors are now caught and returned in the results object.

## [0.0.4] - 2025-01-13

### Changed

- Fixed FS module not being available in the SDK.
- Clarified some types in the input SDK.
- General cleanup of some comments.

## [0.0.3] - 2025-01-10

### Changed

- Removed the `__sdk.js` developer file from the respoitory.
- Fixed the types for runAirtableScript.
- Made the distribution use a relative path for importing the SDK code.

## [0.0.2] - 2025-01-09

### Changed

- Changed the `name` property of records to pull data from the first field in the table.

## [0.0.1] - 2025-01-08

### Added

- Initial release.
