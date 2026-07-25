import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const cloudCategory: CategoryDef = {
  name: 'Cloud Computing',
  slug: 'cloud',
  description: 'Master cloud infrastructure and cloud-native computing — AWS, Kubernetes, Serverless, Terraform, and Google Cloud Platform.',
  icon: '☁️',
  color: '#6366f1',
  sortOrder: 8,
  courses: [
    // ━━━━━━━━━━━━━━━━━━━ AWS CLOUD PRACTITIONER ━━━━━━━━━━━━━━━━━━━
    {
      title: 'AWS Cloud Practitioner',
      slug: 'aws-cloud-practitioner',
      description: 'Master core AWS services — EC2, S3, RDS, IAM, VPC, CloudFront, Lambda, and pass the AWS Certified Cloud Practitioner exam.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'AWS Certified Cloud Practitioner Full Course 2026', url: 'https://www.youtube.com/watch?v=SOTamWNgDKc', author: 'FreeCodeCamp / Andrew Brown', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'AWS Core Services Explained in 10 Minutes', url: 'https://www.youtube.com/watch?v=jiL5v2H5fIQ', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'AWS IAM & VPC Networking Deep Dive', url: 'https://www.youtube.com/watch?v=r_s9D2_1e4E', author: 'TechWorld with Nana', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'AWS EC2, S3, and RDS Setup Tutorial', url: 'https://www.youtube.com/watch?v=3hLmDS179YE', author: 'Stephane Maarek', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'AWS Serverless Architecture (Lambda & API Gateway)', url: 'https://www.youtube.com/watch?v=71cd5XerKss', author: 'AWS Events', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Official AWS Certified Cloud Practitioner Exam Guide', url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/', author: 'Amazon Web Services' },
        { resourceType: 'article', title: 'AWS Well-Architected Framework Whitepaper', url: 'https://aws.amazon.com/architecture/well-architected/', author: 'AWS Architecture' },
        { resourceType: 'cheatsheet', title: 'AWS Core Services Quick Reference Cheat Sheet', url: 'https://tutorialsdojo.com/aws-cheat-sheets/', author: 'Tutorials Dojo' },
        { resourceType: 'article', title: 'AWS Free Tier Services & Limits Guide', url: 'https://aws.amazon.com/free/', author: 'AWS' },
        { resourceType: 'cheatsheet', title: 'AWS CLI Commands Reference Guide', url: 'https://quickref.me/aws', author: 'QuickRef' },
      ],
      modules: [
        {
          title: 'Module 1: Cloud Concepts & IAM Security',
          lessons: [
            setupLesson('AWS Cloud Practitioner', 'aws-cloud-practitioner', 'bash',
              `1. Create an AWS Free Tier Account at [aws.amazon.com](https://aws.amazon.com/)\n2. Install AWS CLI: \`aws --version\`\n3. Configure credentials: \`aws configure\`\n4. Test: \`aws sts get-caller-identity\``,
              `aws sts get-caller-identity`,
              `aws sts get-caller-identity`
            ),
            lesson('Cloud Computing Economics & Shared Responsibility Model', 'aws-cloud-basics', `# Cloud Economics\n\nPay-as-you-go pricing, agility, global reach. Shared Responsibility Model: AWS secures the cloud; Customer secures data IN the cloud.`, {
              starterCode: `aws pricing get-products --service-code AmazonEC2`,
              solutionCode: `aws pricing get-products --service-code AmazonEC2`,
              codeLanguage: 'bash',
              quiz: quiz('Cloud Basics Quiz', [
                mcq('In the AWS Shared Responsibility Model, who is responsible for configuring firewall rules (Security Groups)?', 'The Customer', ['AWS', 'Third party ISP'], 'Customers configure security groups, IAM, and data permissions.'),
              ]),
            }),
            lesson('Identity & Access Management (IAM Users, Groups, Roles)', 'aws-iam', `# AWS IAM\n\nManage access securely: IAM Users, Roles (for EC2/Lambda), Policies (JSON permissions), and MFA.`, {
              starterCode: `{\n  "Version": "2012-10-17",\n  "Statement": [{\n    "Effect": "Allow",\n    "Action": "s3:GetObject",\n    "Resource": "arn:aws:s3:::my-bucket/*"\n  }]\n}`,
              solutionCode: `{\n  "Version": "2012-10-17",\n  "Statement": [{\n    "Effect": "Allow",\n    "Action": "s3:GetObject",\n    "Resource": "arn:aws:s3:::my-bucket/*"\n  }]\n}`,
              codeLanguage: 'json',
              quiz: quiz('IAM Quiz', [
                mcq('What IAM entity should be assigned to an EC2 instance to grant it access to S3 without embedding access keys?', 'IAM Role', ['IAM User', 'Root Account'], 'IAM Roles assign temporary credentials securely to AWS resources.'),
              ]),
            }),
            lesson('AWS Global Infrastructure (Regions, AZs, Edge Locations)', 'aws-global-infrastructure', `# AWS Infrastructure\n\nRegions (geographical locations), Availability Zones (isolated datacenters with low-latency links), Edge Locations (CloudFront CDN).`, {
              starterCode: `aws ec2 describe-regions --output table`,
              solutionCode: `aws ec2 describe-regions --output table`,
              codeLanguage: 'bash',
              quiz: quiz('Global Infra Quiz', [
                mcq('What consists of one or more discrete datacenters with redundant power and networking in AWS?', 'Availability Zone (AZ)', ['Edge Location', 'AWS Outpost'], 'An Availability Zone consists of data centers within a Region.'),
              ]),
            }),
            lesson('AWS Billing & Cost Management (Budgets, Cost Explorer)', 'aws-billing-budgets', `# AWS Billing\n\nMonitor costs using AWS Cost Explorer, create AWS Budgets with email alerts, and leverage Savings Plans.`, {
              starterCode: `aws budgets create-budget --account-id 123456789012 --budget file://budget.json`,
              solutionCode: `aws budgets create-budget --account-id 123456789012 --budget file://budget.json`,
              codeLanguage: 'bash',
              quiz: quiz('Billing Quiz', [
                trueFalse('AWS Budgets can trigger email notifications when actual or forecasted spend exceeds thresholds.', true),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Compute, Storage & Networking',
          lessons: [
            lesson('Amazon EC2 & Elastic Block Store (EBS)', 'aws-ec2-ebs', `# Amazon EC2\n\nLaunch virtual servers: On-Demand, Reserved, Spot (up to 90% discount). Attach persistent EBS block storage volumes.`, {
              starterCode: `aws ec2 run-instances --image-id ami-0abcdef1234567890 --instance-type t3.micro --key-name MyKeyPair`,
              solutionCode: `aws ec2 run-instances --image-id ami-0abcdef1234567890 --instance-type t3.micro --key-name MyKeyPair`,
              codeLanguage: 'bash',
              quiz: quiz('EC2 Quiz', [
                mcq('Which EC2 pricing model offers up to 90% discount for fault-tolerant background workloads?', 'Spot Instances', ['On-Demand', 'Reserved Instances'], 'Spot Instances leverage unused EC2 capacity at steep discounts.'),
              ]),
            }),
            lesson('Amazon S3 Storage Classes & Bucket Policies', 'aws-s3-storage', `# Amazon S3\n\nObject storage: S3 Standard, Intelligent-Tiering, Glacier (archival). Configure S3 Bucket Policies and Lifecycle rules.`, {
              starterCode: `aws s3 mb s3://my-unique-bucket-code-mentor\naws s3 cp file.txt s3://my-unique-bucket-code-mentor/`,
              solutionCode: `aws s3 mb s3://my-unique-bucket-code-mentor\naws s3 cp file.txt s3://my-unique-bucket-code-mentor/`,
              codeLanguage: 'bash',
              quiz: quiz('S3 Quiz', [
                mcq('Which S3 storage class automatically moves objects between access tiers to minimize costs?', 'S3 Intelligent-Tiering', ['S3 Standard', 'S3 Glacier'], 'Intelligent-Tiering moves data automatically based on access patterns.'),
              ]),
            }),
            lesson('Virtual Private Cloud (VPC), Subnets & Security Groups', 'aws-vpc-networking', `# AWS VPC\n\nBuild isolated networks: Public/Private Subnets, Internet Gateways (IGW), NAT Gateways, and Security Groups (stateful firewalls).`, {
              starterCode: `aws ec2 create-vpc --cidr-block 10.0.0.0/16`,
              solutionCode: `aws ec2 create-vpc --cidr-block 10.0.0.0/16`,
              codeLanguage: 'bash',
              quiz: quiz('VPC Quiz', [
                trueFalse('Security Groups in AWS VPC are stateful (inbound approval automatically allows outbound response).', true),
              ]),
            }),
            lesson('Managed Databases (RDS, DynamoDB, ElastiCache)', 'aws-managed-databases', `# AWS Databases\n\nAmazon RDS (relational SQL), DynamoDB (NoSQL single-digit ms key-value), ElastiCache (Redis in-memory).`, {
              starterCode: `aws rds create-db-instance --db-instance-identifier mydb --db-instance-class db.t3.micro --engine postgres`,
              solutionCode: `aws rds create-db-instance --db-instance-identifier mydb --db-instance-class db.t3.micro --engine postgres`,
              codeLanguage: 'bash',
              quiz: quiz('AWS Databases Quiz', [
                mcq('Which fully managed serverless NoSQL database provides single-digit millisecond performance at scale?', 'Amazon DynamoDB', ['Amazon RDS', 'Amazon Redshift'], 'DynamoDB is AWS\'s serverless NoSQL document/key-value store.'),
              ]),
            }),
            lesson('Load Balancing & Auto Scaling (ALB & ASG)', 'aws-alb-autoscaling', `# High Availability\n\nDistribute web traffic with Application Load Balancer (ALB) and automatically scale EC2 capacity with Auto Scaling Groups.`, {
              starterCode: `aws elbv2 create-load-balancer --name my-alb --subnets subnet-123456 subnet-789012`,
              solutionCode: `aws elbv2 create-load-balancer --name my-alb --subnets subnet-123456 subnet-789012`,
              codeLanguage: 'bash',
              quiz: quiz('Auto Scaling Quiz', [
                mcq('What AWS component automatically adds or removes EC2 instances based on traffic demand?', 'Auto Scaling Group (ASG)', ['Route 53', 'CloudFront'], 'Auto Scaling Groups dynamically scale instance counts.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Serverless & Architectural Framework',
          lessons: [
            lesson('Serverless Computing (AWS Lambda & API Gateway)', 'aws-lambda-serverless', `# AWS Lambda\n\nRun event-driven code without provisioning servers: \`aws lambda create-function\`.`, {
              starterCode: `exports.handler = async (event) => {\n  return { statusCode: 200, body: JSON.stringify('Hello from Serverless Lambda!') };\n};`,
              solutionCode: `exports.handler = async (event) => {\n  return { statusCode: 200, body: JSON.stringify('Hello from Serverless Lambda!') };\n};`,
              codeLanguage: 'javascript',
              quiz: quiz('AWS Lambda Quiz', [
                mcq('What triggers AWS Lambda execution?', 'Event notifications (e.g. S3 uploads, HTTP API Gateway requests, DynamoDB streams)', ['Manual server boots', 'SSH logins'], 'Lambda functions execute in response to event triggers.'),
              ]),
            }),
            lesson('Content Delivery & DNS (CloudFront & Route 53)', 'aws-cloudfront-route53', `# CloudFront & Route 53\n\nDeliver static assets globally with CloudFront CDN and manage domain routing with Route 53 DNS.`, {
              starterCode: `aws cloudfront create-distribution --origin-domain-name my-bucket.s3.amazonaws.com`,
              solutionCode: `aws cloudfront create-distribution --origin-domain-name my-bucket.s3.amazonaws.com`,
              codeLanguage: 'bash',
              quiz: quiz('CloudFront Quiz', [
                trueFalse('Amazon CloudFront caches content at global Edge Locations close to end users.', true),
              ]),
            }),
            lesson('AWS Monitoring & Auditing (CloudWatch & CloudTrail)', 'aws-cloudwatch-cloudtrail', `# Monitoring & Audit\n\nCloudWatch collects metrics & logs; CloudTrail audits all API account activity for security compliance.`, {
              starterCode: `aws cloudtrail lookup-events --max-items 5`,
              solutionCode: `aws cloudtrail lookup-events --max-items 5`,
              codeLanguage: 'bash',
              quiz: quiz('CloudTrail Quiz', [
                mcq('Which AWS service records API calls and user activity for security audit logging?', 'AWS CloudTrail', ['AWS CloudWatch', 'AWS GuardDuty'], 'CloudTrail logs API calls across your AWS account.'),
              ]),
            }),
            lesson('AWS Well-Architected Framework Pillars', 'aws-well-architected', `# Well-Architected Pillars\n\nOperational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability.`, {
              starterCode: `# 6 Pillars of AWS Well-Architected Framework`,
              solutionCode: `# 6 Pillars of AWS Well-Architected Framework`,
              codeLanguage: 'text',
              quiz: quiz('Well Architected Quiz', [
                mcq('How many core pillars comprise the AWS Well-Architected Framework?', '6', ['4', '5'], 'The framework features 6 architectural pillars.'),
              ]),
            }),
            lesson('AWS Cloud Practitioner Capstone Exam Prep', 'aws-capstone-exam', `# AWS Capstone\n\nReview architectural trade-offs, pricing models, IAM security best practices, and practice scenario questions.`, {
              starterCode: `echo "=== AWS CLOUD PRACTITIONER CERTIFICATION PREP READY ==="`,
              solutionCode: `echo "=== AWS CLOUD PRACTITIONER CERTIFICATION PREP READY ==="`,
              codeLanguage: 'bash',
              quiz: quiz('AWS Capstone Quiz', [
                mcq('What is the core benefit of migrating workloads to AWS cloud infrastructure?', 'Replaces upfront capital expenditure (CapEx) with low variable operational expenditure (OpEx)', ['Guarantees 100% free hosting', 'Eliminates software code'], 'Cloud replaces high CapEx with scalable OpEx.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ KUBERNETES ORCHESTRATION ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Kubernetes Orchestration',
      slug: 'kubernetes-orchestration',
      description: 'Master production container orchestration with Kubernetes — Pods, Deployments, Services, Ingress, Helm, and K8s architecture.',
      difficulty: 'advanced',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'Kubernetes Full Course for Beginners', url: 'https://www.youtube.com/watch?v=X48VuDVv0do', author: 'TechWorld with Nana', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Kubernetes in 100 Seconds', url: 'https://www.youtube.com/watch?v=PziYflu8cB8', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'CKA (Certified Kubernetes Administrator) Full Course', url: 'https://www.youtube.com/watch?v=d6WC5n9G_sM', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Kubernetes Ingress & Helm Package Manager Tutorial', url: 'https://www.youtube.com/watch?v=2vMEQ5zs1ko', author: 'DevOps Directive', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Building Production EKS & GKE Kubernetes Clusters', url: 'https://www.youtube.com/watch?v=p6xDCz00TxU', author: 'Anton Putra', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Official Kubernetes Documentation & API Reference', url: 'https://kubernetes.io/docs/home/', author: 'Cloud Native Computing Foundation (CNCF)' },
        { resourceType: 'article', title: 'Kubernetes By Example Interactive Tutorials', url: 'https://kubernetesbyexample.com/', author: 'Red Hat' },
        { resourceType: 'cheatsheet', title: 'kubectl Command Line Cheat Sheet', url: 'https://kubernetes.io/docs/reference/kubectl/cheatsheet/', author: 'Kubernetes' },
        { resourceType: 'article', title: 'Helm Official Package Manager Documentation', url: 'https://helm.sh/docs/', author: 'Helm Authors' },
        { resourceType: 'cheatsheet', title: 'Kubernetes Resource Manifests Quick Reference', url: 'https://quickref.me/kubectl', author: 'QuickRef' },
      ],
      modules: [
        {
          title: 'Module 1: K8s Architecture & Pod Deployment',
          lessons: [
            setupLesson('Kubernetes Orchestration', 'kubernetes-orchestration', 'bash',
              `1. Install kubectl: \`curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\`\n2. Install Minikube or Kind for local cluster\n3. Run: \`minikube start\`\n4. Test: \`kubectl cluster-info\``,
              `kubectl cluster-info\nkubectl get nodes`,
              `kubectl cluster-info\nkubectl get nodes`
            ),
            lesson('Control Plane vs Worker Nodes Architecture', 'k8s-architecture', `# K8s Architecture\n\nControl Plane: API Server, etcd, Scheduler, Controller Manager. Worker Nodes: Kubelet, Kube-Proxy, Container Runtime.`, {
              starterCode: `kubectl get nodes -o wide`,
              solutionCode: `kubectl get nodes -o wide`,
              codeLanguage: 'bash',
              quiz: quiz('K8s Architecture Quiz', [
                mcq('What key-value store holds the entire cluster state in Kubernetes?', 'etcd', ['Redis', 'PostgreSQL'], '`etcd` is the consistent key-value store for cluster state.'),
              ]),
            }),
            lesson('Deploying Pods (`kubectl run`, YAML manifests)', 'k8s-pods', `# Pods\n\nThe smallest deployable unit in Kubernetes: A wrapper around one or more co-located containers sharing network/storage.`, {
              starterCode: `apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-pod\nspec:\n  containers:\n  - name: nginx\n    image: nginx:latest\n    ports:\n    - containerPort: 80`,
              solutionCode: `apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-pod\nspec:\n  containers:\n  - name: nginx\n    image: nginx:latest\n    ports:\n    - containerPort: 80`,
              codeLanguage: 'yaml',
              quiz: quiz('Pods Quiz', [
                trueFalse('A Kubernetes Pod can host multiple containers that share localhost network namespace.', true),
              ]),
            }),
            lesson('Deployments & ReplicaSets (`kubectl apply`)', 'k8s-deployments', `# Deployments\n\nManage declarative rolling updates, scaling, and self-healing replicas using Deployments.`, {
              starterCode: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web\n  template:\n    metadata:\n      labels:\n        app: web\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.25`,
              solutionCode: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web\n  template:\n    metadata:\n      labels:\n        app: web\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.25`,
              codeLanguage: 'yaml',
              quiz: quiz('Deployments Quiz', [
                mcq('How do you scale a deployment to 5 replicas via CLI?', 'kubectl scale deployment web-deployment --replicas=5', ['kubectl resize 5', 'kubectl expand 5'], '`kubectl scale` adjusts replica count dynamically.'),
              ]),
            }),
            lesson('Rolling Updates & Rollbacks (`kubectl rollout`)', 'k8s-rollouts', `# Rolling Updates\n\nPerform zero-downtime rolling updates: \`kubectl set image deployment/web nginx=nginx:1.26\`. Undo with \`kubectl rollout undo\`.`, {
              starterCode: `kubectl set image deployment/web-deployment nginx=nginx:1.26\nkubectl rollout status deployment/web-deployment`,
              solutionCode: `kubectl set image deployment/web-deployment nginx=nginx:1.26\nkubectl rollout status deployment/web-deployment`,
              codeLanguage: 'bash',
              quiz: quiz('Rollouts Quiz', [
                mcq('Which command reverts a failed deployment to its previous stable revision?', 'kubectl rollout undo deployment/<name>', ['kubectl reset', 'kubectl delete'], '`kubectl rollout undo` reverts to the previous revision.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Networking, Services & Config Management',
          lessons: [
            lesson('Kubernetes Services (ClusterIP, NodePort, LoadBalancer)', 'k8s-services', `# Services\n\nExpose Pods internally (ClusterIP), on node ports (NodePort), or via cloud load balancers (LoadBalancer).`, {
              starterCode: `apiVersion: v1\nkind: Service\nmetadata:\n  name: web-service\nspec:\n  type: LoadBalancer\n  selector:\n    app: web\n  ports:\n  - port: 80\n    targetPort: 80`,
              solutionCode: `apiVersion: v1\nkind: Service\nmetadata:\n  name: web-service\nspec:\n  type: LoadBalancer\n  selector:\n    app: web\n  ports:\n  - port: 80\n    targetPort: 80`,
              codeLanguage: 'yaml',
              quiz: quiz('Services Quiz', [
                mcq('What is the default Kubernetes Service type for internal cluster-only communication?', 'ClusterIP', ['NodePort', 'LoadBalancer'], '`ClusterIP` is default for internal service discovery.'),
              ]),
            }),
            lesson('Ingress Controllers & Path Routing', 'k8s-ingress', `# Ingress\n\nManage external HTTP/HTTPS routing to cluster services with SSL termination via NGINX Ingress Controller.`, {
              starterCode: `apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: app-ingress\nspec:\n  rules:\n  - host: app.example.com\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: web-service\n            port:\n              number: 80`,
              solutionCode: `apiVersion: networking.k8s.io/v1\nkind: Ingress`,
              codeLanguage: 'yaml',
              quiz: quiz('Ingress Quiz', [
                trueFalse('Ingress Controllers manage HTTP domain routing and TLS termination at the entry point of the cluster.', true),
              ]),
            }),
            lesson('ConfigMaps & Secrets Management', 'k8s-configmaps-secrets', `# Config & Secrets\n\nInject environment configuration (\`ConfigMap\`) and base64-encoded secret keys (\`Secret\`) into container environment variables.`, {
              starterCode: `apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\ndata:\n  APP_ENV: "production"\n  LOG_LEVEL: "info"`,
              solutionCode: `apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\ndata:\n  APP_ENV: "production"\n  LOG_LEVEL: "info"`,
              codeLanguage: 'yaml',
              quiz: quiz('ConfigMaps Quiz', [
                mcq('What resource object stores non-confidential key-value configuration settings in K8s?', 'ConfigMap', ['Secret', 'Pod'], 'ConfigMaps store non-sensitive configuration parameters.'),
              ]),
            }),
            lesson('Persistent Volumes (PV, PVC, StorageClass)', 'k8s-volumes-pv', `# Persistent Volumes\n\nDecouple storage requirements: \`StorageClass\` provisions \`PersistentVolume\` (PV) bound to \`PersistentVolumeClaim\` (PVC).`, {
              starterCode: `apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: db-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 10Gi`,
              solutionCode: `apiVersion: v1\nkind: PersistentVolumeClaim`,
              codeLanguage: 'yaml',
              quiz: quiz('PV PVC Quiz', [
                mcq('What object does a developer create to request persistent storage capacity from the cluster?', 'PersistentVolumeClaim (PVC)', ['StorageClass', 'PersistentVolume'], 'Developers issue a PVC to request storage allocations.'),
              ]),
            }),
            lesson('Helm Package Manager for Kubernetes', 'k8s-helm', `# Helm Charts\n\nPackage, configure, and release Kubernetes applications: \`helm install my-release bitnami/wordpress\`.`, {
              starterCode: `helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm install my-db bitnami/postgresql`,
              solutionCode: `helm install my-db bitnami/postgresql`,
              codeLanguage: 'bash',
              quiz: quiz('Helm Quiz', [
                mcq('What is Helm often referred to as in the Kubernetes ecosystem?', 'The Package Manager for Kubernetes', ['The C++ compiler', 'The DNS server'], 'Helm is the package manager for Kubernetes.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Production Operations & Observability',
          lessons: [
            lesson('Namespaces & Resource Quotas', 'k8s-namespaces-quotas', `# Namespaces & Quotas\n\nIsolate tenant environments (\`dev\`, \`staging\`, \`prod\`) and cap CPU/RAM with \`ResourceQuota\`.`, {
              starterCode: `kubectl create namespace production\nkubectl get pods -n production`,
              solutionCode: `kubectl create namespace production\nkubectl get pods -n production`,
              codeLanguage: 'bash',
              quiz: quiz('Namespaces Quiz', [
                trueFalse('Namespaces provide logical scope isolation for resources within a shared Kubernetes cluster.', true),
              ]),
            }),
            lesson('Liveness, Readiness & Startup Probes', 'k8s-probes', `# Probes\n\nConfigure \`livenessProbe\` (restarts unhealthy pods) and \`readinessProbe\` (controls traffic routing).`, {
              starterCode: `livenessProbe:\n  httpGet:\n    path: /healthz\n    port: 8080\n  initialDelaySeconds: 5\n  periodSeconds: 10`,
              solutionCode: `livenessProbe:\n  httpGet:\n    path: /healthz\n    port: 8080`,
              codeLanguage: 'yaml',
              quiz: quiz('Probes Quiz', [
                mcq('Which probe checks if a container is ready to start accepting network traffic?', 'readinessProbe', ['livenessProbe', 'startupProbe'], '`readinessProbe` determines if a pod should receive traffic.'),
              ]),
            }),
            lesson('Horizontal Pod Autoscaler (HPA)', 'k8s-hpa', `# HPA\n\nAutoscale Pod count based on CPU or memory usage: \`kubectl autoscale deployment web --cpu-percent=80 --min=2 --max=10\`.`, {
              starterCode: `kubectl autoscale deployment web-deployment --cpu-percent=80 --min=2 --max=10`,
              solutionCode: `kubectl autoscale deployment web-deployment --cpu-percent=80 --min=2 --max=10`,
              codeLanguage: 'bash',
              quiz: quiz('HPA Quiz', [
                trueFalse('HPA adjusts the number of replica Pods dynamically based on real-time metrics.', true),
              ]),
            }),
            lesson('Cluster Troubleshooting & `kubectl exec`, `logs`, `describe`', 'k8s-troubleshooting', `# Troubleshooting\n\nDebug failing pods: \`kubectl describe pod <name>\`, \`kubectl logs -f <name>\`, and \`kubectl exec -it <name> -- sh\`.`, {
              starterCode: `kubectl describe pod nginx-pod\nkubectl logs -f deployment/web-deployment`,
              solutionCode: `kubectl describe pod nginx-pod`,
              codeLanguage: 'bash',
              quiz: quiz('K8s Debug Quiz', [
                mcq('Which command displays events and detailed diagnostic information for a Pod?', 'kubectl describe pod <name>', ['kubectl get pod', 'kubectl top pod'], '`kubectl describe` shows detailed events and status.'),
              ]),
            }),
            lesson('Kubernetes Capstone: High-Availability EKS/GKE Cluster', 'k8s-capstone', `# K8s Capstone\n\nDeploy a multi-tier microservices application with Ingress routing, HPA autoscaling, and PVC storage.`, {
              starterCode: `echo "=== PRODUCTION KUBERNETES CLUSTER OPERATIONAL ==="`,
              solutionCode: `echo "=== PRODUCTION KUBERNETES CLUSTER OPERATIONAL ==="`,
              codeLanguage: 'bash',
              quiz: quiz('K8s Capstone Quiz', [
                mcq('What cloud native organization hosts Kubernetes, Helm, and Prometheus projects?', 'CNCF (Cloud Native Computing Foundation)', ['Apache Foundation', 'Mozilla'], 'The CNCF hosts Kubernetes and cloud-native projects.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ SERVERLESS ARCHITECTURE ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Serverless Architecture',
      slug: 'serverless-architecture',
      description: 'Build event-driven serverless systems with Serverless Framework, AWS Lambda, EventBridge, DynamoDB, and Step Functions.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'Serverless Architecture Course for Beginners', url: 'https://www.youtube.com/watch?v=71cd5XerKss', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Serverless Framework Crash Course', url: 'https://www.youtube.com/watch?v=l_a25uNbg38', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'AWS Step Functions & EventBridge Event-Driven Design', url: 'https://www.youtube.com/watch?v=R3n0j2j5z1w', author: 'FooBar Serverless', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Building Serverless REST APIs with Node.js & DynamoDB', url: 'https://www.youtube.com/watch?v=rPqRyYJmy28', author: 'Academind', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Serverless Security & Cold Start Optimization', url: 'https://www.youtube.com/watch?v=95bT6rLd84w', author: 'Serverless Land', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Serverless Land Patterns & Architecture (Official)', url: 'https://serverlessland.com/', author: 'AWS Serverless Team' },
        { resourceType: 'article', title: 'Serverless Framework Official Documentation', url: 'https://www.serverless.com/framework/docs', author: 'Serverless Inc' },
        { resourceType: 'cheatsheet', title: 'Serverless.yml Syntax Reference', url: 'https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml', author: 'Serverless' },
        { resourceType: 'article', title: 'AWS Lambda Developer Guide', url: 'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html', author: 'AWS' },
        { resourceType: 'cheatsheet', title: 'Event-Driven Serverless Architecture Cheat Sheet', url: 'https://quickref.me/aws', author: 'QuickRef' },
      ],
      modules: [
        {
          title: 'Module 1: Serverless Framework & Event-Driven Design',
          lessons: [
            setupLesson('Serverless Architecture', 'serverless-architecture', 'yaml',
              `1. Install Serverless Framework: \`npm install -g serverless\`\n2. Create project: \`serverless create --template aws-nodejs --path my-service\`\n3. Deploy: \`serverless deploy\``,
              `service: my-service\nprovider:\n  name: aws\n  runtime: nodejs18.x\nfunctions:\n  hello:\n    handler: handler.hello`,
              `service: my-service\nprovider:\n  name: aws\n  runtime: nodejs18.x\nfunctions:\n  hello:\n    handler: handler.hello`
            ),
            lesson('Event-Driven Architecture Principles', 'serverless-event-driven', `# Event-Driven Systems\n\nDecouple microservices using asynchronous events triggered by S3 uploads, DynamoDB streams, or SQS queues.`, {
              starterCode: `# Event flow: API Gateway -> Lambda -> DynamoDB -> Stream -> EventBridge -> SQS`,
              solutionCode: `# Event flow`,
              codeLanguage: 'text',
              quiz: quiz('Event Driven Quiz', [
                mcq('What is a major advantage of event-driven serverless architectures?', 'Extreme scalability and automatic zero-traffic cost efficiency', ['Requires manual server boots', 'Runs on single CPU'], 'Serverless architectures scale on demand with zero cost when idle.'),
              ]),
            }),
            lesson('AWS Lambda Handler & Context (`event`, `context`)', 'lambda-handlers', `# Lambda Handlers\n\nReceive event payloads, process request context, and return structured API responses.`, {
              starterCode: `export const handler = async (event) => {\n  const body = JSON.parse(event.body || '{}');\n  return {\n    statusCode: 200,\n    body: JSON.stringify({ message: "Hello " + (body.name || "World") })\n  };\n};`,
              solutionCode: `export const handler = async (event) => {\n  const body = JSON.parse(event.body || '{}');\n  return {\n    statusCode: 200,\n    body: JSON.stringify({ message: "Hello " + (body.name || "World") })\n  };\n};`,
              codeLanguage: 'javascript',
              quiz: quiz('Lambda Handler Quiz', [
                mcq('What object contains incoming HTTP body and parameters in a Lambda handler?', 'event', ['context', 'callback'], 'The `event` object holds incoming request details.'),
              ]),
            }),
            lesson('API Gateway Integration & HTTP Endpoints', 'api-gateway-integration', `# API Gateway\n\nMap REST/HTTP endpoints in \`serverless.yml\` to trigger specific Lambda functions.`, {
              starterCode: `functions:\n  getUser:\n    handler: users.get\n    events:\n      - httpApi:\n          path: /users/{id}\n          method: get`,
              solutionCode: `functions:\n  getUser:\n    handler: users.get\n    events:\n      - httpApi:\n          path: /users/{id}\n          method: get`,
              codeLanguage: 'yaml',
              quiz: quiz('API Gateway Quiz', [
                trueFalse('API Gateway handles SSL termination, throttling, and request routing for Lambda functions.', true),
              ]),
            }),
            lesson('DynamoDB Single-Table Design & Serverless Persistence', 'dynamodb-single-table', `# DynamoDB Single Table\n\nModel all entity relationships in a single DynamoDB table using partition keys (PK) and sort keys (SK).`, {
              starterCode: `// Item 1: PK="USER#100", SK="METADATA"\n// Item 2: PK="USER#100", SK="ORDER#500"`,
              solutionCode: `// Single-table modeling`,
              codeLanguage: 'javascript',
              quiz: quiz('DynamoDB Design Quiz', [
                mcq('What key concept characterizes modern high-performance DynamoDB data modeling?', 'Single-Table Design', ['Relational normal form 3NF', 'Full table scans'], 'Single-table design minimizes HTTP requests by packing related items under common PKs.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Event Queues & Orchestration',
          lessons: [
            lesson('Asynchronous Messaging with Amazon SQS & SNS', 'sqs-sns-messaging', `# SQS & SNS\n\nPublish events with SNS (Fan-out) and buffer async jobs with SQS queues for Lambda execution.`, {
              starterCode: `functions:\n  processQueue:\n    handler: worker.process\n    events:\n      - sqs:\n          arn: arn:aws:sqs:us-east-1:123456789012:MyQueue`,
              solutionCode: `functions:\n  processQueue:\n    handler: worker.process`,
              codeLanguage: 'yaml',
              quiz: quiz('SQS SNS Quiz', [
                mcq('Which service allows sending a single message to multiple subscriber queues simultaneously?', 'Amazon SNS (Fan-out pattern)', ['Amazon SQS', 'AWS Lambda'], 'Amazon SNS fans out messages to multiple subscriber endpoints.'),
              ]),
            }),
            lesson('AWS Step Functions State Machines', 'aws-step-functions', `# Step Functions\n\nOrchestrate complex multi-step workflows with error handling, retries, and parallel branches.`, {
              starterCode: `{\n  "Comment": "Order Workflow",\n  "StartAt": "ProcessPayment",\n  "States": {\n    "ProcessPayment": { "Type": "Task", "Resource": "arn:aws:lambda:...", "End": true }\n  }\n}`,
              solutionCode: `{\n  "Comment": "Order Workflow"\n}`,
              codeLanguage: 'json',
              quiz: quiz('Step Functions Quiz', [
                trueFalse('AWS Step Functions provide visual state machine orchestration with built-in retries.', true),
              ]),
            }),
            lesson('Optimizing Cold Starts & Provisioned Concurrency', 'lambda-cold-starts', `# Cold Start Optimization\n\nReduce cold start latency: Use lightweight runtimes (Node.js/Python), optimize bundle size, or enable Provisioned Concurrency.`, {
              starterCode: `functions:\n  fastApi:\n    handler: api.handler\n    provisionedConcurrency: 5`,
              solutionCode: `functions:\n  fastApi:\n    handler: api.handler\n    provisionedConcurrency: 5`,
              codeLanguage: 'yaml',
              quiz: quiz('Cold Start Quiz', [
                mcq('What feature keeps Lambda container instances warm and ready for immediate response?', 'Provisioned Concurrency', ['Edge Locations', 'Route 53'], 'Provisioned Concurrency keeps warm instances active.'),
              ]),
            }),
            lesson('Serverless Environment Variables & SSM Parameter Store', 'serverless-config-ssm', `# Config & Secrets\n\nFetch parameters at deployment or runtime from AWS SSM Parameter Store and Secrets Manager.`, {
              starterCode: `provider:\n  environment:\n    DB_HOST: \${ssm:/myapp/db_host}`,
              solutionCode: `provider:\n  environment:\n    DB_HOST: \${ssm:/myapp/db_host}`,
              codeLanguage: 'yaml',
              quiz: quiz('SSM Parameter Quiz', [
                trueFalse('SSM Parameter Store allows storing central configuration variables fetched securely at deploy time.', true),
              ]),
            }),
            lesson('Monitoring Serverless Systems (AWS X-Ray & CloudWatch)', 'serverless-observability', `# Observability\n\nTrace distributed requests across microservices using AWS X-Ray and CloudWatch Embedded Metric Format (EMF).`, {
              starterCode: `provider:\n  tracing:\n    lambda: true\n    apiGateway: true`,
              solutionCode: `provider:\n  tracing:\n    lambda: true`,
              codeLanguage: 'yaml',
              quiz: quiz('X-Ray Quiz', [
                mcq('Which AWS service provides end-to-end distributed tracing across serverless microservices?', 'AWS X-Ray', ['CloudWatch Logs', 'GuardDuty'], 'AWS X-Ray traces request propagation across Lambda, API Gateway, and DynamoDB.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Enterprise Serverless & CI/CD',
          lessons: [
            lesson('Automated Serverless Testing (Local & Integration Tests)', 'serverless-testing', `# Serverless Testing\n\nTest handlers locally using \`serverless invoke local -f functionName\` and mock AWS SDK calls.`, {
              starterCode: `serverless invoke local -f hello --data '{"body": "{\\"name\\": \\"Scott\\"}"}'`,
              solutionCode: `serverless invoke local -f hello`,
              codeLanguage: 'bash',
              quiz: quiz('Serverless Testing Quiz', [
                mcq('How do you execute a Lambda handler locally without deploying to AWS?', 'serverless invoke local -f <func>', ['serverless deploy', 'aws lambda start'], '`serverless invoke local` executes function logic locally.'),
              ]),
            }),
            lesson('CI/CD Pipelines for Serverless Applications', 'serverless-cicd', `# Serverless CI/CD\n\nAutomate deployments across staging and production environments using GitHub Actions: \`serverless deploy --stage prod\`.`, {
              starterCode: `- name: Deploy Serverless\n  run: npx serverless deploy --stage prod\n  env:\n    AWS_ACCESS_KEY_ID: \${{ secrets.AWS_ACCESS_KEY_ID }}\n    AWS_SECRET_ACCESS_KEY: \${{ secrets.AWS_SECRET_ACCESS_KEY }}`,
              solutionCode: `- name: Deploy Serverless\n  run: npx serverless deploy --stage prod`,
              codeLanguage: 'yaml',
              quiz: quiz('Serverless CI/CD Quiz', [
                trueFalse('Passing `--stage prod` deploys an isolated production stack environment.', true),
              ]),
            }),
            lesson('Infrastructure as Code (IaC) with AWS CDK / Terraform', 'serverless-iac-cdk', `# AWS CDK & Terraform\n\nDefine serverless infrastructure in TypeScript using AWS Cloud Development Kit (CDK).`, {
              starterCode: `import * as cdk from 'aws-cdk-lib';\nimport * as lambda from 'aws-cdk-lib/aws-lambda';\nconst fn = new lambda.Function(this, 'MyFn', {\n  runtime: lambda.Runtime.NODEJS_18_X,\n  handler: 'index.handler',\n  code: lambda.Code.fromAsset('lambda')\n});`,
              solutionCode: `import * as cdk from 'aws-cdk-lib';`,
              codeLanguage: 'ts',
              quiz: quiz('CDK Quiz', [
                mcq('What tool allows defining AWS cloud infrastructure using programming languages like TypeScript or Python?', 'AWS CDK (Cloud Development Kit)', ['AWS Management Console', 'Bash scripts'], 'AWS CDK uses real programming languages to synthesize CloudFormation templates.'),
              ]),
            }),
            lesson('Serverless Security Best Practices & Least Privilege IAM', 'serverless-security-best-practices', `# Security Best Practices\n\nAssign narrow IAM permissions per Lambda function; sanitize inputs and validate API Gateway schemas.`, {
              starterCode: `iam:\n  role:\n    statements:\n      - Effect: Allow\n        Action: [ "dynamodb:GetItem" ]\n        Resource: "arn:aws:dynamodb:us-east-1:123456789012:table/Users"`,
              solutionCode: `iam:\n  role:\n    statements: [...]`,
              codeLanguage: 'yaml',
              quiz: quiz('Serverless Security Quiz', [
                trueFalse('Each Lambda function should have its own tailored IAM role with minimal required permissions.', true),
              ]),
            }),
            lesson('Serverless Architecture Capstone: Global E-Commerce Event System', 'serverless-capstone', `# Serverless Capstone\n\nDeploy a production event-driven architecture: API Gateway → Lambda → DynamoDB → EventBridge → SQS worker queues.`, {
              starterCode: `console.log("=== GLOBAL SERVERLESS EVENT ARCHITECTURE OPERATIONAL ===");`,
              solutionCode: `console.log("=== GLOBAL SERVERLESS EVENT ARCHITECTURE OPERATIONAL ===");`,
              codeLanguage: 'javascript',
              quiz: quiz('Serverless Capstone Quiz', [
                mcq('What makes Serverless Architecture the modern standard for cloud-native web applications?', 'Zero infrastructure management, auto-scaling from 0 to millions, and paying strictly for execution milliseconds', ['Requires dedicated hardware', 'No internet required'], 'Serverless offers seamless scaling and pay-per-execution pricing.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ GCP CLOUD ENGINEER ━━━━━━━━━━━━━━━━━━━
    {
      title: 'GCP Cloud Engineer',
      slug: 'gcp-cloud-engineer',
      description: 'Master Google Cloud Platform — Compute Engine, Cloud Run, GKE, BigQuery, IAM, VPC, and pass the Google Associate Cloud Engineer exam.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'GCP Associate Cloud Engineer Full Course 2026', url: 'https://www.youtube.com/watch?v=jpno9UbfN1c', author: 'FreeCodeCamp / Antoni Tzavelas', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Google Cloud Platform in 100 Seconds', url: 'https://www.youtube.com/watch?v=d_k8v9Q0gMo', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'GCP Cloud Run & Container Deployments Tutorial', url: 'https://www.youtube.com/watch?v=83Xv-V4nK5Q', author: 'TechWorld with Nana', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'BigQuery Data Analytics & SQL Masterclass', url: 'https://www.youtube.com/watch?v=d3MDxA04pmo', author: 'Google Cloud Tech', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'GCP IAM Roles & VPC Network Peering', url: 'https://www.youtube.com/watch?v=R9N2kYV7gKw', author: 'Sander van Vugt', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Official Google Cloud Documentation', url: 'https://cloud.google.com/docs', author: 'Google Cloud' },
        { resourceType: 'article', title: 'Google Cloud Architecture Center Guides', url: 'https://cloud.google.com/architecture', author: 'Google' },
        { resourceType: 'cheatsheet', title: 'gcloud CLI Commands Quick Reference', url: 'https://cloud.google.com/sdk/gcloud/reference', author: 'Google Cloud' },
        { resourceType: 'article', title: 'Google Cloud Skills Boost Labs', url: 'https://www.cloudskillsboost.google/', author: 'Google' },
        { resourceType: 'cheatsheet', title: 'GCP vs AWS vs Azure Services Comparison Reference', url: 'https://cloud.google.com/free/docs/aws-azure-gcp-service-comparison', author: 'Google Cloud' },
      ],
      modules: [
        {
          title: 'Module 1: GCP Resource Hierarchy & IAM',
          lessons: [
            setupLesson('GCP Cloud Engineer', 'gcp-cloud-engineer', 'bash',
              `1. Install Google Cloud SDK: \`curl https://sdk.cloud.google.com | bash\`\n2. Initialize SDK: \`gcloud init\`\n3. Authenticate: \`gcloud auth login\`\n4. Set project: \`gcloud config set project MY_PROJECT_ID\``,
              `gcloud config list\ngcloud auth list`,
              `gcloud config list\ngcloud auth list`
            ),
            lesson('GCP Resource Hierarchy (Organization, Folders, Projects)', 'gcp-resource-hierarchy', `# Resource Hierarchy\n\nOrganization -> Folders -> Projects -> Resources. Inherit IAM policies down the tree.`, {
              starterCode: `gcloud projects list\ngcloud config get-value project`,
              solutionCode: `gcloud projects list\ngcloud config get-value project`,
              codeLanguage: 'bash',
              quiz: quiz('GCP Hierarchy Quiz', [
                mcq('What entity sits at the root top level of the GCP resource hierarchy?', 'Organization', ['Project', 'Folder'], 'The Organization node is the top-level root.'),
              ]),
            }),
            lesson('GCP IAM Roles (Primitive, Predefined, Custom)', 'gcp-iam-roles', `# GCP IAM\n\nAssign roles: Primitive (Viewer, Editor, Owner), Predefined (e.g. \`roles/storage.objectViewer\`), and Custom roles.`, {
              starterCode: `gcloud projects add-iam-policy-binding my-project-id --member="user:alice@example.com" --role="roles/viewer"`,
              solutionCode: `gcloud projects add-iam-policy-binding my-project-id --member="user:alice@example.com" --role="roles/viewer"`,
              codeLanguage: 'bash',
              quiz: quiz('GCP IAM Quiz', [
                mcq('Why should Predefined roles be preferred over Primitive roles (Viewer/Editor/Owner)?', 'Predefined roles enforce Least Privilege by granting granular permissions', ['Predefined roles cost less', 'Primitive roles are disabled'], 'Predefined roles provide granular, least-privilege permissions.'),
              ]),
            }),
            lesson('Service Accounts & Key Management', 'gcp-service-accounts', `# Service Accounts\n\nNon-human identities used by VMs, GKE pods, and Cloud Run to authenticate calls to GCP APIs.`, {
              starterCode: `gcloud iam service-accounts create my-sa --display-name="My Service Account"`,
              solutionCode: `gcloud iam service-accounts create my-sa --display-name="My Service Account"`,
              codeLanguage: 'bash',
              quiz: quiz('Service Accounts Quiz', [
                trueFalse('Service accounts represent non-human identities for applications running in GCP.', true),
              ]),
            }),
            lesson('Google Cloud Console & Cloud Shell Integration', 'gcp-cloud-shell', `# Cloud Shell\n\nUse built-in browser-based Linux terminal pre-loaded with \`gcloud\`, \`kubectl\`, \`terraform\`, and 5GB home directory.`, {
              starterCode: `gcloud info`,
              solutionCode: `gcloud info`,
              codeLanguage: 'bash',
              quiz: quiz('Cloud Shell Quiz', [
                mcq('What developer tools come pre-installed in Google Cloud Shell?', 'gcloud CLI, kubectl, docker, terraform, git', ['Only python', 'No tools'], 'Cloud Shell comes pre-loaded with major cloud developer tools.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Compute Engine, Cloud Run & Storage',
          lessons: [
            lesson('Google Compute Engine (GCE Virtual Machines)', 'gcp-compute-engine', `# Compute Engine\n\nProvision VMs with \`gcloud compute instances create my-vm --zone=us-central1-a --machine-type=e2-micro\`.`, {
              starterCode: `gcloud compute instances create web-vm --zone=us-central1-a --machine-type=e2-micro --image-family=debian-11 --image-project=debian-cloud`,
              solutionCode: `gcloud compute instances create web-vm --zone=us-central1-a --machine-type=e2-micro --image-family=debian-11 --image-project=debian-cloud`,
              codeLanguage: 'bash',
              quiz: quiz('GCE Quiz', [
                mcq('Which command creates a Google Compute Engine VM via gcloud CLI?', 'gcloud compute instances create <name>', ['gcloud vm make', 'gcloud compute add'], '`gcloud compute instances create` provisions VMs.'),
              ]),
            }),
            lesson('Google Cloud Run (Serverless Container Platform)', 'gcp-cloud-run', `# Cloud Run\n\nDeploy stateless HTTP containers instantly: \`gcloud run deploy my-app --image gcr.io/proj/img --platform managed\`.`, {
              starterCode: `gcloud run deploy my-web-app --image gcr.io/google-samples/hello-app:1.0 --region us-central1 --allow-unauthenticated`,
              solutionCode: `gcloud run deploy my-web-app --image gcr.io/google-samples/hello-app:1.0 --region us-central1 --allow-unauthenticated`,
              codeLanguage: 'bash',
              quiz: quiz('Cloud Run Quiz', [
                trueFalse('Google Cloud Run automatically scales containers from 0 to thousands of instances based on HTTP requests.', true),
              ]),
            }),
            lesson('Google Cloud Storage (GCS Buckets & Lifecycle)', 'gcp-cloud-storage', `# Cloud Storage\n\nCreate object buckets with \`gcloud storage buckets create gs://my-bucket\`. Configure lifecycle policies.`, {
              starterCode: `gcloud storage buckets create gs://code-mentor-gcs-bucket --location=us-central1\ngcloud storage cp file.txt gs://code-mentor-gcs-bucket/`,
              solutionCode: `gcloud storage buckets create gs://code-mentor-gcs-bucket --location=us-central1`,
              codeLanguage: 'bash',
              quiz: quiz('GCS Quiz', [
                mcq('What URI prefix is used to reference Google Cloud Storage buckets?', 'gs://', ['s3://', 'gcp://'], '`gs://` is the URI scheme for GCS object resources.'),
              ]),
            }),
            lesson('Google Kubernetes Engine (GKE Autopilot)', 'gcp-gke', `# GKE Autopilot\n\nManaged Kubernetes cluster where Google manages node infrastructure, auto-scaling, and security hardening.`, {
              starterCode: `gcloud container clusters create-auto my-cluster --region us-central1`,
              solutionCode: `gcloud container clusters create-auto my-cluster --region us-central1`,
              codeLanguage: 'bash',
              quiz: quiz('GKE Quiz', [
                mcq('What mode in GKE delegates node provisioning, security, and maintenance entirely to Google?', 'GKE Autopilot', ['GKE Standard', 'GKE Manual'], 'GKE Autopilot manages cluster node infrastructure automatically.'),
              ]),
            }),
            lesson('VPC Networks, Subnets & Cloud Armor Firewall', 'gcp-vpc-networking', `# GCP VPC\n\nGlobal VPC networks with subnets per region. Secure HTTP endpoints using Google Cloud Armor DDoS protection.`, {
              starterCode: `gcloud compute networks create custom-vpc --subnet-mode=custom`,
              solutionCode: `gcloud compute networks create custom-vpc --subnet-mode=custom`,
              codeLanguage: 'bash',
              quiz: quiz('GCP VPC Quiz', [
                trueFalse('Unlike AWS VPCs which are regional, GCP VPC networks are global by nature across all regions.', true),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: BigQuery, Monitoring & Certification Prep',
          lessons: [
            lesson('BigQuery Data Warehouse & SQL Analytics', 'gcp-bigquery', `# BigQuery\n\nServerless enterprise data warehouse. Execute petabyte-scale SQL queries in seconds.`, {
              starterCode: `bq query --use_legacy_sql=false 'SELECT name, gender, count FROM \`bigquery-public-data.usa_names.usa_1910_2013\` WHERE state = "CA" LIMIT 5'`,
              solutionCode: `bq query --use_legacy_sql=false 'SELECT name, gender, count FROM \`bigquery-public-data.usa_names.usa_1910_2013\` WHERE state = "CA" LIMIT 5'`,
              codeLanguage: 'bash',
              quiz: quiz('BigQuery Quiz', [
                mcq('What command-line tool is used to interact with Google BigQuery?', 'bq', ['gcloud', 'sql'], 'The `bq` CLI tool interacts with BigQuery.'),
              ]),
            }),
            lesson('Google Cloud Operations Suite (Cloud Logging & Monitoring)', 'gcp-monitoring-logging', `# Cloud Operations\n\nCollect logs with Cloud Logging, monitor metrics with Cloud Monitoring, and set up alert policies.`, {
              starterCode: `gcloud logging read "resource.type=gce_instance" --limit=5`,
              solutionCode: `gcloud logging read "resource.type=gce_instance" --limit=5`,
              codeLanguage: 'bash',
              quiz: quiz('GCP Monitoring Quiz', [
                trueFalse('Google Cloud Logging automatically captures stdout and stderr from Cloud Run and GKE containers.', true),
              ]),
            }),
            lesson('Cloud Pub/Sub & Cloud Functions', 'gcp-pubsub-functions', `# Pub/Sub & Functions\n\nAsynchronous messaging with Pub/Sub triggering lightweight event-driven Cloud Functions.`, {
              starterCode: `gcloud pubsub topics create my-topic\ngcloud pubsub subscriptions create my-sub --topic=my-topic`,
              solutionCode: `gcloud pubsub topics create my-topic`,
              codeLanguage: 'bash',
              quiz: quiz('PubSub Quiz', [
                mcq('What GCP service provides scalable asynchronous message ingestion?', 'Cloud Pub/Sub', ['Cloud SQL', 'Cloud Storage'], 'Cloud Pub/Sub is Google\'s global message broker.'),
              ]),
            }),
            lesson('Terraform Infrastructure as Code for GCP', 'gcp-terraform', `# Terraform for GCP\n\nProvision GCP infrastructure declaratively: \`resource "google_compute_instance" "default" { ... }\`.`, {
              starterCode: `provider "google" {\n  project = "my-project-id"\n  region  = "us-central1"\n}\nresource "google_storage_bucket" "bucket" {\n  name     = "my-tf-bucket-1234"\n  location = "US"\n}`,
              solutionCode: `provider "google" {\n  project = "my-project-id"\n}`,
              codeLanguage: 'hcl',
              quiz: quiz('GCP Terraform Quiz', [
                trueFalse('Terraform uses the `google` provider to manage GCP infrastructure declaratively.', true),
              ]),
            }),
            lesson('GCP Associate Cloud Engineer Capstone Exam Prep', 'gcp-capstone-exam', `# GCP Capstone\n\nReview gcloud CLI commands, IAM policy bindings, GKE cluster management, and scenario-based exam questions.`, {
              starterCode: `echo "=== GOOGLE ASSOCIATE CLOUD ENGINEER CERTIFICATION PREP COMPLETE ==="`,
              solutionCode: `echo "=== GOOGLE ASSOCIATE CLOUD ENGINEER CERTIFICATION PREP COMPLETE ==="`,
              codeLanguage: 'bash',
              quiz: quiz('GCP Capstone Quiz', [
                mcq('What Google Cloud tool helps developers practice hands-on labs with real GCP environments?', 'Google Cloud Skills Boost', ['Stack Overflow', 'GitHub Gist'], 'Google Cloud Skills Boost provides hands-on lab environments.'),
              ]),
            }),
          ]
        }
      ]
    }
  ]
};
