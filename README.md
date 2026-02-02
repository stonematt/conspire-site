# Conspire Site

Static landing page for [Conspire](https://dyne.org/conspire/) ephemeral chat.

## Files

- `index.html` - Landing page
- `style.css` - Minnesota civic theme (blue/gold)
- `room.js` - Base58 room ID generator

## Usage

The "Start a New Room" button generates a random room ID and redirects to:
```
https://hostname:8443/room/{base58-id}
```

## Customization

Edit `index.html` to change branding, or `style.css` for colors.

The `room.js` script auto-attaches to any button with `id="new-room"`.

## Integration

This repo is used as a submodule in [conspire-infra](../conspire-infra).
# Test change Mon Feb  2 10:21:06 PST 2026
