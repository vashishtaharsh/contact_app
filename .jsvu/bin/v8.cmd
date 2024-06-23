@echo off
"%~dp0\..\engines/v8\v8.exe" --snapshot_blob="%~dp0\..\engines/v8\snapshot_blob.bin" %*
