# 🎯 Sudoku Realtime

A modern, real-time multiplayer Sudoku game built with Next.js 15 and powered by Liveblocks for seamless collaborative gameplay.

## ✨ Features

- 🎮 **Real-time Multiplayer**: Play Sudoku with friends in real-time
- 🎨 **Modern UI**: Beautiful interface built with **Tailwind** CSS and Radix UI components
- 🌙 **Dark/Light Theme**: Toggle between themes with next-themes
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 🎉 **Confetti Celebrations**: Visual celebrations when puzzles are solved
- 🔗 **Room Sharing**: Share QR codes to invite friends to your game room
- 🔐 **Authentication**: Secure user authentication with NextAuth.js
- ⚡ **Performance Optimized**: Built with Next.js 15 and Turbopack

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with React 19
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom animations
- **UI Components**: [Radix UI](https://www.radix-ui.com/) with shadcn/ui
- **Real-time Collaboration**: [Liveblocks](https://liveblocks.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **QR Codes**: [react-qr-code](https://github.com/rosskhanas/react-qr-code)
- **Animations**: [Motion](https://motion.dev/) & [Canvas Confetti](https://github.com/catdad/canvas-confetti)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- A Liveblocks account for real-time features

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/openabir/sudoku-online.git
   cd live-sudoku
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add your environment variables:

   ```env
   # Liveblocks
   LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key

   # NextAuth
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 How to Play

1. **Create or Join a Room**: Start a new game or join an existing room using a room code
2. **Invite Friends**: Share the QR code or room link with friends
3. **Collaborate**: Work together to solve the Sudoku puzzle in real-time
4. **Celebrate**: Enjoy the confetti when you successfully complete the puzzle!

## 📁 Project Structure

```
live-sudoku/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── context/           # React context providers
│   ├── hooks/             # Custom React hooks
│   ├── room/              # Room-specific pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   └── theme-provider.tsx # Theme context provider
├── lib/                   # Utility functions
│   └── utils.ts          # Common utilities
└── public/               # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Themes

The project supports both light and dark themes. You can customize the color scheme by modifying the CSS variables in `app/globals.css`.

### UI Components

All UI components are built with Radix UI and can be customized through the `components/ui/` directory. The project uses the "new-york" style from shadcn/ui.

## 🚀 Deployment

### Deploy on Vercel

1. Push your code to a GitHub repository
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Other Platforms

This Next.js application can be deployed on any platform that supports Node.js applications, such as:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Liveblocks](https://liveblocks.io/) for real-time collaboration capabilities
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives

## 📧 Contact

**openabir** - [@openabir](https://github.com/openabir)

Project Link: [https://github.com/openabir/sudoku-online](https://github.com/openabir/sudoku-online)
