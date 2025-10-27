# Wishlist Mobile App

A beautiful, modern mobile app for managing wishlists, events, and social gifting built with React Native and Expo.

## 🎨 Features

- **Home Dashboard**: View upcoming birthdays, events, and friends' activity
- **Events Management**: Create and manage birthday parties, secret santa, and custom events
- **Wishlist System**: Create, share, and manage personal wishlists
- **Profile Management**: Personal profile with settings and friends
- **Notifications**: Real-time notifications for wishlist updates and event invites
- **Modern UI**: Telegram-inspired minimal design with smooth animations

## 🚀 Tech Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **React Navigation** - Navigation library
- **Lucide React Native** - Beautiful, consistent icons
- **Expo Blur** - Glass morphism effects
- **React Native Safe Area Context** - Safe area handling

## 📱 Screenshots

The app features a clean, modern interface with:
- Floating bottom navigation bar with glass morphism effect
- Dark theme with accent colors
- Smooth animations and micro-interactions
- Consistent iconography throughout

## 🛠️ Prerequisites

Before running the app, make sure you have:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Expo CLI** (`npm install -g @expo/cli`)
- **Expo Go app** on your mobile device (iOS/Android)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aizakmi08/wishlist.git
   cd wishlist
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on your device**
   - Install **Expo Go** from App Store (iOS) or Google Play Store (Android)
   - Scan the QR code displayed in your terminal or browser
   - The app will load on your device

## 🎯 Running the App

### Development Mode

```bash
# Start the Expo development server
npx expo start

# Start with cleared cache (if you encounter issues)
npx expo start --clear

# Start in tunnel mode (if local network doesn't work)
npx expo start --tunnel
```

### Available Scripts

```bash
# Start development server
npm start

# Start with cleared cache
npm run start:clear

# Run on iOS simulator (requires Xcode)
npm run ios

# Run on Android emulator (requires Android Studio)
npm run android

# Build for production
npm run build
```

## 📱 Device Setup

### iOS Device
1. Install **Expo Go** from the App Store
2. Open the app and scan the QR code
3. The app will install and run on your device

### Android Device
1. Install **Expo Go** from Google Play Store
2. Open the app and scan the QR code
3. The app will install and run on your device

### Troubleshooting
- **QR code not scanning**: Try using the tunnel mode (`npx expo start --tunnel`)
- **App not loading**: Clear cache with `npx expo start --clear`
- **Network issues**: Ensure your device and computer are on the same network

## 🏗️ Project Structure

```
WishlistApp/
├── App.js                 # Main app component with navigation
├── package.json           # Dependencies and scripts
├── screens/              # App screens
│   ├── HomeScreen.js     # Dashboard with birthdays and events
│   ├── EventsScreen.js   # Events management
│   ├── WishlistsScreen.js # Wishlist management
│   ├── ProfileScreen.js  # User profile and settings
│   ├── CreateScreen.js   # Create new items
│   └── NotificationsScreen.js # Notifications center
└── README.md            # This file
```

## 🎨 Design System

### Colors
- **Primary**: `#3B82F6` (Soft blue)
- **Background**: `#0F0F10` (Near black)
- **Cards**: `#161618` (Dark gray)
- **Text**: `#FFFFFF` (White)
- **Secondary Text**: `#AAA` (Light gray)
- **Success**: `#4CD964` (Green)
- **Error**: `#FF5A5F` (Red)

### Typography
- **Font Family**: Inter or SF Pro
- **Base Size**: 16px
- **Headings**: 18-32px
- **Weights**: Regular (400), Semi-bold (600)

### Icons
- **Library**: Lucide React Native
- **Style**: Outline with 1.5px stroke weight
- **Size**: 24px for main icons, 20px for secondary
- **Colors**: Consistent with design system

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
EXPO_PUBLIC_API_URL=your_api_url_here
EXPO_PUBLIC_APP_NAME=Wishlist
```

### App Configuration
The app is configured in `app.json` for Expo settings:

```json
{
  "expo": {
    "name": "Wishlist",
    "slug": "wishlist-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#0F0F10"
    }
  }
}
```

## 🚀 Deployment

### Building for Production

1. **Configure app.json** with your app details
2. **Build the app**:
   ```bash
   npx expo build:android
   npx expo build:ios
   ```
3. **Submit to stores** using Expo's submission tools

### Publishing Updates

```bash
# Publish over-the-air update
npx expo publish

# Publish with specific release channel
npx expo publish --release-channel production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**aizakmi08**
- GitHub: [@aizakmi08](https://github.com/aizakmi08)
- Repository: [wishlist](https://github.com/aizakmi08/wishlist)

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [Lucide](https://lucide.dev/) for the beautiful icon library
- [React Navigation](https://reactnavigation.org/) for navigation
- [React Native](https://reactnative.dev/) for the mobile framework

---

**Happy coding! 🎉**
