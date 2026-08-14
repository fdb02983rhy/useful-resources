---
id: dotenvx
title: dotenvx
kind: repository
source_url: https://github.com/dotenvx/dotenvx
added: 2026-08-14
status: reference
topics: [developer-tools, secrets-management, environment-configuration]
---

# dotenvx

## Summary

A cross-platform tool and library for loading environment variables, managing
multiple `.env` files, and encrypting their values. It can wrap commands for
applications written in many languages, integrate with frameworks and CI/CD,
and keep encrypted environment files separate from the private keys required to
decrypt them.

## Why this was saved

- Extends the familiar dotenv workflow beyond a single language or framework.
- Supports explicit composition of multiple environments and override behavior.
- Provides encryption, validation, example-file generation, and secret-output
  redaction in one command-line workflow.
- Includes documented integrations for coding agents, containers, deployment
  platforms, password managers, and common application frameworks.

## Notes

### Source claims

- `dotenvx run -- <command>` injects variables from `.env` files into any child
  process, independent of the application's language.
- Multiple environment files can be loaded in a declared order; `--overload`
  changes whether later files override values already set.
- `dotenvx encrypt` produces an encrypted `.env` file and a separate public and
  private key pair. Deployment requires the corresponding `DOTENV_PRIVATE_KEY`
  rather than storing that private key beside the encrypted file.
- The CLI can validate environment files against `.env.example`, generate an
  example file, and redact secret values from wrapped command output.
- The package is distributed under the BSD 3-Clause license.

### Editor synthesis

dotenvx is useful when teams want `.env` ergonomics with consistent behavior
across languages and environments. Encryption does not eliminate secret
management: private keys still require restricted storage, rotation, and access
control, and decrypted values remain available to the launched process.

## Source

[Open the repository](https://github.com/dotenvx/dotenvx) ·
[Inspect the reviewed revision](https://github.com/dotenvx/dotenvx/tree/e9b98d73fae4945713298a2d29b6604712b65617)

Inspected at commit `e9b98d7`.
