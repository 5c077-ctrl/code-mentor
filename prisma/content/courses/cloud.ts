import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const cloudCategory: CategoryDef = {
  name: 'Cloud Computing',
  slug: 'cloud',
  description: 'Deploy and scale applications on the cloud — AWS, Google Cloud, Kubernetes, and serverless architecture.',
  icon: '☁️',
  color: '#f97316',
  sortOrder: 8,
  courses: [
    {
      title: 'AWS Cloud Practitioner',
      slug: 'aws-cloud-practitioner',
      description: 'Learn core AWS services — EC2, S3, Lambda, RDS, IAM, and cloud architecture fundamentals for the AWS Cloud Practitioner exam.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'AWS Certified Cloud Practitioner', url: 'https://www.youtube.com/watch?v=SOTamWNgDKc', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'article', title: 'AWS Documentation', url: 'https://docs.aws.amazon.com/', author: 'Amazon' },
      ],
      modules: [
        {
          title: 'Cloud Foundations',
          lessons: [
            lesson('What is Cloud Computing?', 'what-is-cloud-computing', `# What is Cloud Computing?

## Definition
On-demand delivery of computing resources over the internet with pay-as-you-go pricing.

## Cloud vs On-Premises

| Aspect | On-Premises | Cloud |
|--------|-------------|-------|
| Cost | High upfront (CapEx) | Pay-as-you-go (OpEx) |
| Scaling | Manual, slow | Automatic, instant |
| Maintenance | Your responsibility | Provider handles it |
| Global reach | Build data centers | Deploy globally in minutes |

## Cloud Service Models

### IaaS (Infrastructure as a Service)
Rent virtual machines, storage, networking.
- AWS EC2, Google Compute Engine, Azure VMs

### PaaS (Platform as a Service)
Deploy code without managing servers.
- AWS Elastic Beanstalk, Google App Engine, Heroku

### SaaS (Software as a Service)
Use complete software over the internet.
- Gmail, Salesforce, Slack

## AWS Global Infrastructure
- **Regions**: Geographic areas (us-east-1, eu-west-1)
- **Availability Zones (AZs)**: Isolated data centers within a region
- **Edge Locations**: CDN points for low-latency content delivery

## The Shared Responsibility Model
- **AWS**: Security OF the cloud (hardware, networking, facilities)
- **Customer**: Security IN the cloud (data, IAM, encryption, patches)`, {
              starterCode: `# Cloud computing concepts\n\nservice_models = {\n    "IaaS": {\n        "description": "Infrastructure as a Service",\n        "examples": ["EC2", "S3", "VPC"],\n        "you_manage": "OS, runtime, applications",\n    },\n    "PaaS": {\n        "description": "Platform as a Service",\n        "examples": ["Elastic Beanstalk", "App Engine", "Heroku"],\n        "you_manage": "Applications and data",\n    },\n    "SaaS": {\n        "description": "Software as a Service",\n        "examples": ["Gmail", "Salesforce", "Slack"],\n        "you_manage": "Just your data",\n    },\n}\n\nfor model, info in service_models.items():\n    print(f"\\n{model}: {info['description']}")\n    print(f"  Examples: {', '.join(info['examples'])}")\n    print(f"  You manage: {info['you_manage']}")`,
              solutionCode: `service_models = {\n    "IaaS": {"description": "Infrastructure as a Service", "examples": ["EC2", "S3", "VPC"], "you_manage": "OS, runtime, applications"},\n    "PaaS": {"description": "Platform as a Service", "examples": ["Elastic Beanstalk", "App Engine"], "you_manage": "Applications and data"},\n    "SaaS": {"description": "Software as a Service", "examples": ["Gmail", "Salesforce"], "you_manage": "Just your data"},\n}\n\nfor model, info in service_models.items():\n    print(f"{model}: {info['description']}")\n    print(f"  Examples: {', '.join(info['examples'])}")`,
              codeLanguage: 'python',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('Cloud Computing Quiz', [
                mcq('What is the pay-as-you-go model?', 'You only pay for what you use', ['Fixed monthly cost', 'Annual subscription'], 'Cloud computing charges based on actual resource consumption.'),
                mcq('What is EC2?', 'Virtual machines (IaaS)', ['Database service', 'Storage service'], 'EC2 provides resizable virtual servers in the cloud.'),
                trueFalse('In the shared responsibility model, AWS is responsible for patching your applications.', false, 'You are responsible for your applications, data, and OS patches.'),
              ]),
            }),
            lesson('Core AWS Services', 'core-aws-services', `# Core AWS Services

## Compute

### EC2 (Elastic Compute Cloud)
Virtual servers in the cloud.

\`\`\`bash
# Launch an EC2 instance (AWS CLI)
aws ec2 run-instances \\
  --image-id ami-0abcdef1234567890 \\
  --instance-type t3.micro \\
  --key-name my-key \\
  --security-groups my-sg
\`\`\`

### Lambda (Serverless)
Run code without provisioning servers.

\`\`\`python
def lambda_handler(event, context):
    name = event.get('name', 'World')
    return {
        'statusCode': 200,
        'body': f'Hello, {name}!'
    }
\`\`\`

## Storage

### S3 (Simple Storage Service)
Object storage with unlimited capacity.

\`\`\`bash
# Upload a file
aws s3 cp file.txt s3://my-bucket/

# List bucket contents
aws s3 ls s3://my-bucket/

# Sync a folder
aws s3 sync ./build s3://my-website-bucket
\`\`\`

### S3 Storage Classes
| Class | Use Case |
|-------|----------|
| Standard | Frequently accessed |
| Standard-IA | Infrequently accessed |
| Glacier | Archive (minutes retrieval) |
| Glacier Deep Archive | Long-term archive (hours) |

## Database

### RDS (Relational Database Service)
Managed relational databases (MySQL, PostgreSQL, Aurora).

### DynamoDB
Managed NoSQL (key-value and document).

## Networking

### VPC (Virtual Private Cloud)
Your own isolated network in AWS.

### CloudFront (CDN)
Content delivery network for global caching.`, {
              starterCode: `# AWS services overview\n\naws_services = {\n    "Compute": [\n        {"name": "EC2", "type": "Virtual Machines", "pricing": "Per hour/second"},\n        {"name": "Lambda", "type": "Serverless Functions", "pricing": "Per request + duration"},\n        {"name": "ECS/EKS", "type": "Container Orchestration", "pricing": "Per resource"},\n    ],\n    "Storage": [\n        {"name": "S3", "type": "Object Storage", "pricing": "Per GB stored + requests"},\n        {"name": "EBS", "type": "Block Storage", "pricing": "Per GB provisioned"},\n        {"name": "EFS", "type": "File Storage", "pricing": "Per GB used"},\n    ],\n    "Database": [\n        {"name": "RDS", "type": "Relational DB", "pricing": "Per instance hour"},\n        {"name": "DynamoDB", "type": "NoSQL", "pricing": "Per request + storage"},\n        {"name": "ElastiCache", "type": "In-Memory Cache", "pricing": "Per node hour"},\n    ],\n}\n\nfor category, services in aws_services.items():\n    print(f"\\n━━ {category} ━━")\n    for svc in services:\n        print(f"  {svc['name']:12} | {svc['type']:25} | {svc['pricing']}")`,
              solutionCode: `aws_services = {\n    "Compute": [\n        {"name": "EC2", "type": "Virtual Machines"},\n        {"name": "Lambda", "type": "Serverless Functions"},\n    ],\n    "Storage": [\n        {"name": "S3", "type": "Object Storage"},\n        {"name": "EBS", "type": "Block Storage"},\n    ],\n    "Database": [\n        {"name": "RDS", "type": "Relational DB"},\n        {"name": "DynamoDB", "type": "NoSQL"},\n    ],\n}\n\nfor category, services in aws_services.items():\n    print(f"\\n{category}:")\n    for svc in services:\n        print(f"  {svc['name']}: {svc['type']}")`,
              codeLanguage: 'python',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('AWS Services Quiz', [
                mcq('What is S3 used for?', 'Object storage (files, images, backups)', ['Virtual machines', 'Databases'], 'S3 stores any type of file as objects in buckets.'),
                mcq('What is AWS Lambda?', 'Serverless compute — run code without servers', ['A database service', 'A CDN service'], 'Lambda executes code in response to events without server management.'),
                trueFalse('EC2 instances run 24/7 and you pay only for what you use.', true, 'EC2 charges per second/hour of running time.'),
              ]),
            }),
          ],
        },
      ],
    },

    {
      title: 'Kubernetes & Container Orchestration',
      slug: 'kubernetes-orchestration',
      description: 'Deploy, scale, and manage containerized applications with Kubernetes — pods, deployments, services, and Helm.',
      difficulty: 'advanced',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'article', title: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/home/', author: 'CNCF' },
        { resourceType: 'youtube', title: 'Kubernetes Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=X48VuDVv0do', author: 'TechWorld with Nana', platform: 'YouTube' },
      ],
      modules: [
        {
          title: 'Kubernetes Core Concepts',
          lessons: [
            lesson('Pods, Deployments & Services', 'k8s-pods-deployments', `# Pods, Deployments & Services

## What is Kubernetes (K8s)?
Container orchestration platform that automates deployment, scaling, and management.

## Architecture
- **Control Plane**: API Server, Scheduler, Controller Manager, etcd
- **Worker Nodes**: kubelet, kube-proxy, Container Runtime

## Pod — Smallest Unit

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app
  labels:
    app: my-app
spec:
  containers:
  - name: my-app
    image: my-app:1.0
    ports:
    - containerPort: 3000
    resources:
      limits:
        memory: "256Mi"
        cpu: "500m"
\`\`\`

## Deployment — Manage Replicas

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app:1.0
        ports:
        - containerPort: 3000
\`\`\`

## Service — Expose Your App

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer
\`\`\`

## Key Commands

\`\`\`bash
kubectl apply -f deployment.yaml
kubectl get pods
kubectl get services
kubectl scale deployment my-app --replicas=5
kubectl logs pod-name
kubectl exec -it pod-name -- /bin/sh
\`\`\``, {
              starterCode: `# Kubernetes YAML structure\n\n# deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web-app\n  template:\n    metadata:\n      labels:\n        app: web-app\n    spec:\n      containers:\n      - name: web-app\n        image: nginx:alpine\n        ports:\n        - containerPort: 80\n        resources:\n          limits:\n            memory: "128Mi"\n            cpu: "250m"\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: web-app-service\nspec:\n  selector:\n    app: web-app\n  ports:\n  - port: 80\n    targetPort: 80\n  type: LoadBalancer`,
              solutionCode: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web-app\n  template:\n    metadata:\n      labels:\n        app: web-app\n    spec:\n      containers:\n      - name: web-app\n        image: nginx:alpine\n        ports:\n        - containerPort: 80\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: web-app-service\nspec:\n  selector:\n    app: web-app\n  ports:\n  - port: 80\n    targetPort: 80\n  type: LoadBalancer`,
              codeLanguage: 'yaml',
              estimatedMinutes: 30,
              xpReward: 70,
              quiz: quiz('Kubernetes Quiz', [
                mcq('What is a Pod in Kubernetes?', 'The smallest deployable unit, containing one or more containers', ['A virtual machine', 'A Docker image'], 'Pods are the atomic unit of scheduling in Kubernetes.'),
                mcq('What does a Deployment manage?', 'A set of identical pods with desired state', ['Network routing', 'Storage volumes'], 'Deployments ensure the specified number of pod replicas are running.'),
                trueFalse('A Service provides a stable endpoint to access pods.', true, 'Services abstract pod IPs and provide load balancing.'),
              ]),
            }),
          ],
        },
      ],
    },

    {
      title: 'Serverless Architecture',
      slug: 'serverless-architecture',
      description: 'Build event-driven applications without managing servers — AWS Lambda, API Gateway, DynamoDB, and the Serverless Framework.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 18,
      resources: [
        { resourceType: 'article', title: 'Serverless Framework Docs', url: 'https://www.serverless.com/framework/docs', author: 'Serverless Inc.' },
        { resourceType: 'youtube', title: 'Serverless Tutorial', url: 'https://www.youtube.com/watch?v=71cd5XGrKgo', author: 'freeCodeCamp', platform: 'YouTube' },
      ],
      modules: [
        {
          title: 'Serverless Fundamentals',
          lessons: [
            lesson('Functions as a Service', 'functions-as-service', `# Functions as a Service (FaaS)

## What is Serverless?
- No server management
- Auto-scaling to zero
- Pay per execution (not uptime)
- Event-driven architecture

## AWS Lambda

\`\`\`python
import json

def handler(event, context):
    body = json.loads(event.get('body', '{}'))
    name = body.get('name', 'World')
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json'},
        'body': json.dumps({
            'message': f'Hello, {name}!',
            'requestId': context.aws_request_id
        })
    }
\`\`\`

## Event Sources
| Source | Trigger |
|--------|---------|
| API Gateway | HTTP requests |
| S3 | File upload/delete |
| DynamoDB Streams | Database changes |
| SQS | Message queue |
| CloudWatch Events | Scheduled (cron) |
| SNS | Notifications |

## API Gateway + Lambda

\`\`\`yaml
# serverless.yml
service: my-api

provider:
  name: aws
  runtime: python3.12
  region: us-east-1

functions:
  hello:
    handler: handler.handler
    events:
      - httpApi:
          path: /hello
          method: get
  
  createUser:
    handler: users.create
    events:
      - httpApi:
          path: /users
          method: post
\`\`\`

## Serverless Pros & Cons

| Pros | Cons |
|------|------|
| No server management | Cold start latency |
| Auto-scaling | Vendor lock-in |
| Pay per use | Execution time limits |
| Built-in HA | Debugging is harder |`, {
              starterCode: `# Serverless function example\nimport json\nfrom datetime import datetime\n\ndef lambda_handler(event, context):\n    """AWS Lambda function that processes requests\"\"\"\n    \n    # Parse the request\n    http_method = event.get('httpMethod', 'GET')\n    path = event.get('path', '/')\n    \n    if path == '/hello':\n        name = event.get('queryStringParameters', {}).get('name', 'World')\n        body = {'message': f'Hello, {name}!', 'timestamp': str(datetime.now())}\n    elif path == '/health':\n        body = {'status': 'healthy', 'uptime': 'N/A (serverless)'}\n    else:\n        return {'statusCode': 404, 'body': json.dumps({'error': 'Not found'})}\n    \n    return {\n        'statusCode': 200,\n        'headers': {'Content-Type': 'application/json'},\n        'body': json.dumps(body)\n    }\n\n# Simulate a request\nevent = {'path': '/hello', 'queryStringParameters': {'name': 'Developer'}}\nresult = lambda_handler(event, None)\nprint(json.dumps(json.loads(result['body']), indent=2))`,
              solutionCode: `import json\nfrom datetime import datetime\n\ndef lambda_handler(event, context):\n    path = event.get('path', '/')\n    if path == '/hello':\n        name = event.get('queryStringParameters', {}).get('name', 'World')\n        body = {'message': f'Hello, {name}!', 'timestamp': str(datetime.now())}\n    elif path == '/health':\n        body = {'status': 'healthy'}\n    else:\n        return {'statusCode': 404, 'body': json.dumps({'error': 'Not found'})}\n    return {'statusCode': 200, 'body': json.dumps(body)}\n\nevent = {'path': '/hello', 'queryStringParameters': {'name': 'Developer'}}\nresult = lambda_handler(event, None)\nprint(json.dumps(json.loads(result['body']), indent=2))`,
              codeLanguage: 'python',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Serverless Quiz', [
                mcq('What does "serverless" mean?', 'You don\'t manage servers — the cloud provider does', ['No servers exist at all', 'Only uses client-side code'], 'Servers still exist — you just don\'t have to manage or provision them.'),
                mcq('What is a cold start?', 'Latency when a function runs for the first time', ['A server crash', 'A deployment failure'], 'Cold starts occur when the runtime environment is initialized from scratch.'),
                trueFalse('Serverless functions can run indefinitely.', false, 'Lambda has a maximum execution time (15 minutes for AWS Lambda).'),
              ]),
            }),
          ],
        },
      ],
    },

    {
      title: 'Google Cloud Platform',
      slug: 'google-cloud-platform',
      description: 'Learn GCP core services — Compute Engine, Cloud Run, BigQuery, Cloud Storage, and Firestore for scalable cloud applications.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'article', title: 'GCP Documentation', url: 'https://cloud.google.com/docs', author: 'Google' },
        { resourceType: 'youtube', title: 'GCP Full Course', url: 'https://www.youtube.com/watch?v=jpno8FSqpc8', author: 'freeCodeCamp', platform: 'YouTube' },
      ],
      modules: [
        {
          title: 'GCP Core Services',
          lessons: [
            lesson('GCP Overview & Services', 'gcp-overview', `# GCP Overview & Services

## Core Compute Services

### Compute Engine (IaaS)
Virtual machines like AWS EC2.

\`\`\`bash
gcloud compute instances create my-vm \\
  --zone=us-central1-a \\
  --machine-type=e2-medium \\
  --image-family=debian-11
\`\`\`

### Cloud Run (Serverless Containers)
Run containers without managing infrastructure.

\`\`\`bash
# Deploy a container
gcloud run deploy my-service \\
  --image gcr.io/project/my-app:latest \\
  --region us-central1 \\
  --allow-unauthenticated
\`\`\`

### Cloud Functions (FaaS)
Event-driven serverless functions.

\`\`\`python
import functions_framework

@functions_framework.http
def hello(request):
    name = request.args.get('name', 'World')
    return f'Hello, {name}!'
\`\`\`

## Storage & Database

| Service | Type | Use Case |
|---------|------|----------|
| Cloud Storage | Object | Files, images, backups |
| Firestore | NoSQL | Mobile/web apps |
| Cloud SQL | Relational | MySQL, PostgreSQL |
| BigQuery | Data Warehouse | Analytics, ML |
| Bigtable | Wide-column | IoT, time-series |

## BigQuery — Serverless Data Warehouse

\`\`\`sql
-- Query public datasets
SELECT
  name,
  SUM(number) AS total
FROM \`bigquery-public-data.usa_names.usa_1910_2013\`
GROUP BY name
ORDER BY total DESC
LIMIT 10;
\`\`\`

## Key Differences from AWS
| AWS | GCP |
|-----|-----|
| EC2 | Compute Engine |
| Lambda | Cloud Functions |
| S3 | Cloud Storage |
| RDS | Cloud SQL |
| DynamoDB | Firestore |
| Redshift | BigQuery |`, {
              starterCode: `# GCP services comparison\n\ngcp_services = {\n    "Compute": [\n        {"name": "Compute Engine", "type": "VMs", "aws_equivalent": "EC2"},\n        {"name": "Cloud Run", "type": "Serverless Containers", "aws_equivalent": "Fargate"},\n        {"name": "Cloud Functions", "type": "FaaS", "aws_equivalent": "Lambda"},\n        {"name": "GKE", "type": "Kubernetes", "aws_equivalent": "EKS"},\n    ],\n    "Storage": [\n        {"name": "Cloud Storage", "type": "Object", "aws_equivalent": "S3"},\n        {"name": "Firestore", "type": "NoSQL", "aws_equivalent": "DynamoDB"},\n        {"name": "Cloud SQL", "type": "Relational", "aws_equivalent": "RDS"},\n        {"name": "BigQuery", "type": "Data Warehouse", "aws_equivalent": "Redshift"},\n    ],\n}\n\nfor category, services in gcp_services.items():\n    print(f"\\n━━ {category} ━━")\n    for svc in services:\n        print(f"  {svc['name']:20} | {svc['type']:22} | AWS: {svc['aws_equivalent']}")`,
              solutionCode: `gcp_services = {\n    "Compute": [\n        {"name": "Compute Engine", "type": "VMs", "aws": "EC2"},\n        {"name": "Cloud Run", "type": "Serverless Containers", "aws": "Fargate"},\n        {"name": "Cloud Functions", "type": "FaaS", "aws": "Lambda"},\n    ],\n    "Storage": [\n        {"name": "Cloud Storage", "type": "Object", "aws": "S3"},\n        {"name": "BigQuery", "type": "Data Warehouse", "aws": "Redshift"},\n    ],\n}\n\nfor cat, svcs in gcp_services.items():\n    print(f"\\n{cat}:")\n    for s in svcs:\n        print(f"  {s['name']}: {s['type']} (AWS: {s['aws']})")`,
              codeLanguage: 'python',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('GCP Quiz', [
                mcq('What is Cloud Run?', 'A serverless platform for running containers', ['A VM service', 'A database'], 'Cloud Run deploys and scales containers without managing infrastructure.'),
                mcq('What is BigQuery best for?', 'Large-scale data analytics and SQL queries', ['Real-time web apps', 'File storage'], 'BigQuery is a serverless data warehouse optimized for analytics.'),
                trueFalse('GCP Cloud Functions are similar to AWS Lambda.', true, 'Both are event-driven serverless compute services.'),
              ]),
            }),
          ],
        },
      ],
    },
  ],
};
