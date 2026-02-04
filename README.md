# Conspire Landing Page

A responsive, accessible landing page for [Conspire](https://dyne.org/conspire/) ephemeral anonymous chat. Perfect for community organizing and secure communication.

## ✨ Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Accessibility**: WCAG 2.1 compliant with semantic HTML5
- **Room Generation**: Cryptographically secure Base58 room IDs
- **Modern CSS**: Clean, maintainable styles with CSS Grid/Flexbox
- **No Dependencies**: Pure HTML/CSS/JavaScript - no build process required

## 🚀 Quick Start

### Simple Usage
```bash
# Serve locally
python3 -m http.server 8000
open http://localhost:8000
```

### Integration with Conspire
The landing page automatically redirects to Conspire on port 8443:
```
https://your-domain.com:8443/room/{random-base58-id}
```

## 📁 File Structure

```
conspire-site/
├── index.html          # Main landing page
├── style.css          # Minnesota civic theme styling  
├── room.js            # Base58 room ID generator
└── README.md          # This file
```

## 🎨 Customization

### Branding
Edit `index.html` to change:
- Page title and meta tags
- Header content and tagline
- Feature descriptions
- Footer information

### Styling
Modify `style.css` for:
- Color scheme (default: Minnesota civic blue/gold)
- Typography and spacing
- Responsive breakpoints
- Component styling

### Functionality
The `room.js` script:
- Generates cryptographically secure room IDs
- Uses Base58 encoding for URL-friendly strings
- Auto-attaches to any button with `id="new-room"`
- Supports custom room ID length configuration

### Example Custom Room ID
```javascript
// Generate longer room IDs for increased security
function generateRoomId(length = 32) {
    const buffer = new Uint8Array(length);
    crypto.getRandomValues(buffer);
    return encodeBase58(buffer);
}
```

## 🔧 Development

### Local Testing
```bash
# Lint JavaScript
npx eslint room.js

# Validate HTML
curl -s https://validator.w3.org/nu/?out=json -H "Content-Type: text/html" --data-binary @index.html

# Responsive testing
python3 -m http.server 8000
# Open on different devices or use browser dev tools
```

### JavaScript Testing
```javascript
// Test Base58 encoding
const testBuffer = new TextEncoder().encode('Hello World');
const encoded = encodeBase58(testBuffer);
console.log(encoded); // Should output: 2NEpo7TZRs

// Test room generation
const roomId = generateRoomId();
console.log(roomId); // e.g., "5KQwrPbwdL6PhXujxW37FSSfu"
```

## 🎯 Use Cases

- **Community Organizing**: Neighborhood watch, local events
- **Activism**: Secure coordination for social movements  
- **Education**: Anonymous classroom discussions
- **Support Groups**: Private, safe sharing spaces
- **Business**: Secure team communication

## 🔗 Integration

### As Submodule (Recommended)
```bash
# In main project
git submodule add https://github.com/your-org/conspire-site.git site_content
git submodule update --init --remote
```

### As Static Files
Copy the files to your web server's document root:
```bash
cp -r conspire-site/* /var/www/your-domain.com/
```

### With Caddy (as used in conspire-infra)
```caddy
your-domain.com {
    root * /var/www/your-domain.com
    file_server
    encode gzip
}
```

## 🌐 Browser Support

- Chrome 67+
- Firefox 60+
- Safari 12+
- Edge 79+

Uses modern JavaScript features:
- `crypto.getRandomValues()` for secure randomness
- `Uint8Array` for efficient byte handling
- ES6 const/let for better scoping

## 🔒 Security

- **No Tracking**: No analytics, cookies, or tracking scripts
- **Secure Randomness**: Uses `crypto.getRandomValues()` for room IDs
- **HTTPS Ready**: Designed for HTTPS deployment
- **No Dependencies**: Reduced attack surface

## 🎨 Design System

### Colors (Minnesota Civic Theme)
- **Primary Blue**: `#2c3e50` 
- **Accent Gold**: `#f39c12`
- **Text Dark**: `#2c3e50`
- **Text Light**: `#7f8c8d`
- **Background**: `#ffffff`

### Typography
- **Headings**: System UI fonts, bold weights
- **Body**: System UI fonts, regular weight
- **Buttons**: System UI fonts, medium weight

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🤝 Contributing

See the main [CONTRIBUTING.md](../CONTRIBUTING.md) for:
- Code style guidelines
- Testing requirements
- Pull request process
- Community standards

## 🔗 Related Projects

- [conspire-infra](../conspire-infra) - Ansible deployment infrastructure
- [Conspire](https://dyne.org/conspire/) - Core ephemeral chat application
- [Dyne.org](https://dyne.org/) - Organization behind Conspire

---

Built for secure, anonymous community communication. 🌟
