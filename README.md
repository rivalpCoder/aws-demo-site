# AWS Resource Card

A static web page that showcases popular AWS services as interactive cards. Built with plain HTML and CSS, and deployed via AWS Amplify.

## Preview

A dark-themed, responsive page featuring:
- Hero section with AWS stats (200+ services, 99.99% uptime SLA, 30+ global regions)
- Clickable service cards linking to official AWS docs
- Animated background blobs
- CTA button linking to the AWS Free Tier

## Services Featured

| Service | Description |
|---|---|
| Amazon S3 | Scalable object storage |
| AWS Lambda | Serverless compute |
| Amazon EC2 | Resizable cloud compute |
| Amazon RDS | Managed relational database |
| Amazon CloudFront | Global CDN |
| AWS Amplify | Full-stack web app hosting |
| AWS IAM | Access management |
| Amazon CloudWatch | Monitoring & observability |

## Project Structure

```
aws-demo-site/
├── index.html      # Main page markup
├── style.css       # Styles and animations
├── amplify.yml     # AWS Amplify build config
└── README.md
```

## Deployment

This site is configured for AWS Amplify as a static site (no build step required).

1. Push this repository to a Git provider (GitHub, GitLab, etc.)
2. Connect the repo to [AWS Amplify](https://aws.amazon.com/amplify/)
3. Amplify will use `amplify.yml` and deploy automatically on every push

## Local Development

No dependencies or build tools needed. Just open `index.html` in a browser:

```bash
# Option 1 — open directly
start index.html

# Option 2 — serve locally
npx serve .
```
