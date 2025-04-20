# Welcome to the Setup 👋

#### Reference:
1. Javascript Mastery - Next.js 15 Crash Course | Build and Deploy a Production-Ready Full Stack App - https://www.youtube.com/watch?v=Zq5fmkH0T78
2. Resources Link  - https://jsmastery.pro/video-kit/fdd6fd86-4d91-4214-9655-acc9ac789c20
3. Sourcecode      - https://github.com/adrianhajdin/yc_directory
4. Assets/Snippets - https://github.com/adrianhajdin/yc_directory/blob/main/README.md
5. Figma           - https://www.figma.com/design/TMGW6rLGene3cqHb4Kilz5/Pitch-Startup-App?node-id=2-2&p=f
6. Discord         - https://discord.com/invite/bEq3XnYYPN
7. NextJs Guide    - https://drive.google.com/file/d/1GT-WAMY-VsOhW7kVBgZ-_XU5qwEvEGi9/view

## Steps to setup:
### 1. Create project:
Create Git repo >> Clone >> Open Webstorm >> Select "Project..." >> Select location

### 2. Create Expo project
> npx create-next-app@latest
> 
> Ok to proceed? y
> 
> What is your project named? ./
> 
> Would you like to use TypeScript? Yes
> 
> Would you like to use ESLint? Yes
> 
> Would you like to use TailwindCSS? Yes
> 
> Would you like your code inside a src/ directory? No
> 
> Would you like to use App Router? (recommended) Yes
> 
> Would you like to use Turbopack for next dev? (recommended) Yes
> 
> Would you like to customize the import alias (@/* by default)? No
> 
> cd \<project-name\>

### 3. Start project
> npm run dev

Check on browser: http://localhost:3000/

#### 3.1 Scripts in package.json:

| Script                        | Use                                                                       |
|-------------------------------|---------------------------------------------------------------------------|
| "dev": "next dev --turbopack" | Start NextJs in Dev mode with Hot-module reloading, error-reporting, etc. |
| "build": "next build"         | Create optimized prod build of the app |
| "start": "next start"         | Starts NextJs in Prod mode |
| "lint": "next lint"           | Runs ESLint for all files in the Source dir. |






































## React Native
-- Learn once, Write anywhere. \
-- Windows, Android, iOS, Any Browsers


## Steps to setup:
### 1. Create project:  
Create Git repo >> Clone >> Open Webstorm >> Select "Project..." >> Select location

### 2. Create Expo project
> npx create-expo-app@latest ./
> 
> cd <project-name>

### 3. Start project
> npm start

To clear cache:
> npx expo start -c

### 4. Setup NativeWind and Tailwind
Refer NativeWind documentation https://nativewind.dev/getting-started/installation

For SDK 50+ :
> npm install nativewind tailwindcss@^3.4.17 react-native-reanimated@3.16.2 react-native-safe-area-context

You may need to add tailwind.config.js(Using script), global.css, babel.config.js, metro.config.js

> ℹ️  INFO \
> From here onwards, replace ./global.css with the relative path to the CSS file you just created.

### 5. Setup ESLint and Prettier (recommended by Expo)
Refer ESLint documentation https://docs.expo.dev/guides/using-eslint/

For SDK 50+ :
> npx expo lint
> 
> npx expo install prettier eslint-config-prettier eslint-plugin-prettier -- --save-dev

> ℹ️  INFO \
> For Webstorm, configure ESLint 
> 1. Goto Settings
> 2. Languages and Frameworks
> 3. Javascript >> Code Quality Tools >> ESLint
> 4. Select option "Manual ESLint configuration" (~/AdvancedComputing/ProjectsWebstorm/uber-clone/node_modules/eslint)
> 5. Select "Run eslint --fix on save"
> 6. Goto Tools
> 7. Actions on Save
> 8. Verify "Run eslint --fix" is selected
>
> For Webstorm, configure Prettier
> 1. Goto Settings
> 2. Languages and Frameworks
> 3. Javascript >> Prettier
> 4. Select option "Manual Prettier configuration" (~/AdvancedComputing/ProjectsWebstorm/uber-clone/node_modules/prettier)
> 5. Select "Run on 'Reformat Code' action"
> 6. Select "Run on save"
> 7. Goto Tools
> 8. Actions on Save
> 9. Verify "Run eslint --fix" is selected

### 6. Install Swiper:
> npm install react-native-swiper

### 7. Type declarations
If you add this line in constants/index.ts, it will throw an error:
> import onboarding1 from "@/assets/images/onboarding1.png";

> ERROR:\
> TS2307: Cannot find module @/assets/images/onboarding1.png or its corresponding type declarations.

To fix this, create types/type.d.ts and types/image.d.ts file

### 8. Install react-native-modal for <ReactNativeModal>
> npm install react-native-modal

### 9. Install Clerk
Refer: https://clerk.com/docs/quickstarts/expo

Step 1: Signup/Login to Clerk.\
Step 2: Create Application "JSM_Ryde". Use suffix "JSM_". \
Step 3: Select "Email" and "Google"
Step 4: On Clerk Dashboard, choose your framework as "Expo". \
Step 5: Goto "Configure" >> "Native Applications" >> "Enable Native API" \
Step 6: Install  Clerk Expo SDK:
> npm install @clerk/clerk-expo

Step 7: Set your Clerk API keys. Create .env file in project root folder and paste
> EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZW6hYmxlZD1tdYNrcmG0LTYwLmNsZYJrLmFjY391bnSzLmSldiR

Step 8: Add <ClerkProvider> to your root layout(Refer documentation)

Step 9: Configure the Token Cache with Expo
> npm install expo-secure-store

Step 10: Create lib/auth.ts file

Step 11: Create OAuth.tsx file

Step 12: Install expo-local-authentication (CHECK!)
> npm install expo-local-authentication





## Setup Serverless Postgres DB 
Signup or Login on link: https://neon.tech
Select Project name, Postgres Version, Cloud Service, Region