@echo off
"%~dp0\..\engines/v8-debug\v8-debug.exe" --snapshot_blob="%~dp0\..\engines/v8-debug\snapshot_blob.bin" %*
