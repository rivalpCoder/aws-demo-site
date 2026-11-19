const cards = [
  { href: 'https://aws.amazon.com/s3/', accent: '#3b82f6', iconBg: '#dbeafe', icon: '🪣', name: 'Amazon S3', desc: 'Scalable object storage for any data' },
  { href: 'https://aws.amazon.com/lambda/', accent: '#f59e0b', iconBg: '#fef3c7', icon: '⚡', name: 'AWS Lambda', desc: 'Run code without provisioning servers' },
  { href: 'https://aws.amazon.com/ec2/', accent: '#22c55e', iconBg: '#dcfce7', icon: '🖥️', name: 'Amazon EC2', desc: 'Resizable compute capacity in the cloud' },
  { href: 'https://aws.amazon.com/rds/', accent: '#a855f7', iconBg: '#f3e8ff', icon: '🗄️', name: 'Amazon RDS', desc: 'Managed relational database service' },
  { href: 'https://aws.amazon.com/cloudfront/', accent: '#f97316', iconBg: '#ffedd5', icon: '🌐', name: 'CloudFront', desc: 'Global content delivery network' },
  { href: 'https://aws.amazon.com/amplify/', accent: '#ef4444', iconBg: '#fee2e2', icon: '🚀', name: 'AWS Amplify', desc: 'Deploy & host full-stack web apps' },
  { href: 'https://aws.amazon.com/iam/', accent: '#0ea5e9', iconBg: '#e0f2fe', icon: '🔐', name: 'AWS IAM', desc: 'Manage access to AWS services securely' },
  { href: 'https://aws.amazon.com/cloudwatch/', accent: '#10b981', iconBg: '#d1fae5', icon: '📊', name: 'CloudWatch', desc: 'Monitor resources and applications' },
]

function ResourceCard({ href, accent, iconBg, icon, name, desc }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="card" style={{ '--accent': accent }}>
      <div className="card-icon" style={{ background: iconBg, color: accent }}>{icon}</div>
      <div className="card-body">
        <span className="card-name">{name}</span>
        <span className="card-desc">{desc}</span>
      </div>
      <span className="card-arrow">→</span>
    </a>
  )
}

export default function App() {
  return (
    <>
      <div className="bg-blobs">
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="blob blob3" />
      </div>
      <div className="page">
        <div className="hero">
          <div className="hero-badge">☁️ Cloud Reference</div>
          <h1 className="hero-title"><span className="highlight">AWS</span> Resource Card</h1>
          <p className="hero-sub">Explore the most popular Amazon Web Services. Click any card to learn more.</p>
          <div className="stats">
            <div className="stat"><strong>200+</strong><span>Services</span></div>
            <div className="stat-divider" />
            <div className="stat"><strong>99.99%</strong><span>Uptime SLA</span></div>
            <div className="stat-divider" />
            <div className="stat"><strong>30+</strong><span>Global Regions</span></div>
          </div>
        </div>
        <div className="grid">
          {cards.map(card => <ResourceCard key={card.name} {...card} />)}
        </div>
        <div className="footer">
          <a href="https://aws.amazon.com/free/" target="_blank" rel="noreferrer" className="cta-btn">🎁 Start Free with AWS Free Tier</a>
          <p className="footer-note">No credit card required for many free tier services</p>
        </div>
      </div>
    </>
  )
}
