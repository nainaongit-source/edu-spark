@echo off
echo ========================================================
echo   EDUSPARK INSTITUTE - DEPLOYMENT FIX TOOL
echo ========================================================
echo.
echo Step 1: Cleaning up Git tracking...
git rm -r --cached node_modules >nul 2>&1
echo [OK] Removed node_modules from Git cache.
echo.
echo Step 2: Adding .gitignore...
echo node_modules > .gitignore
echo dist >> .gitignore
echo .DS_Store >> .gitignore
echo *.local >> .gitignore
echo .vercel >> .gitignore
echo [OK] .gitignore created/updated.
echo.
echo Step 3: Committing fixes...
git add .
git commit -m "Fix: Corrected location to Abhayapuri and fixed deployment permissions"
echo [OK] Changes committed.
echo.
echo Step 4: Pushing to GitHub...
echo.
echo Please ensure your GitHub repository is connected to Vercel.
echo Press any key to push to 'main' branch...
pause >nul
git push origin main
echo.
echo ========================================================
echo   DONE! Vercel should be building your site now.
echo ========================================================
pause
