import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const aiMlCategory: CategoryDef = {
  name: 'AI & Machine Learning',
  slug: 'ai-ml',
  description: 'Dive into artificial intelligence — data science with Python, machine learning algorithms, deep learning, and prompt engineering.',
  icon: '🤖',
  color: '#a855f7',
  sortOrder: 6,
  courses: [
    {
      title: 'Python for Data Science',
      slug: 'python-data-science',
      description: 'Master NumPy, Pandas, and Matplotlib for data analysis, cleaning, and visualization in Python.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'Data Analysis with Python', url: 'https://www.youtube.com/watch?v=r-uOLxNrNk8', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'article', title: 'Kaggle Learn', url: 'https://www.kaggle.com/learn', author: 'Kaggle' },
      ],
      modules: [
        {
          title: 'Data Analysis with Pandas',
          lessons: [
            lesson('NumPy & Pandas Basics', 'numpy-pandas-basics', `# NumPy & Pandas

## NumPy — Numerical Computing

\`\`\`python
import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])
zeros = np.zeros((3, 3))
rand = np.random.rand(5)

# Operations (vectorized — fast!)
print(arr * 2)          # [2, 4, 6, 8, 10]
print(arr.mean())       # 3.0
print(arr.std())        # 1.414
print(np.dot(arr, arr)) # 55
\`\`\`

## Pandas — Data Analysis

\`\`\`python
import pandas as pd

# Create a DataFrame
df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Age': [25, 30, 22, 28],
    'Score': [92, 85, 88, 95]
})

# Basic operations
print(df.head())           # First 5 rows
print(df.describe())       # Statistics
print(df['Score'].mean())  # 90.0

# Filtering
high_scorers = df[df['Score'] >= 90]

# Sorting
df_sorted = df.sort_values('Score', ascending=False)

# Group by
df.groupby('Age')['Score'].mean()
\`\`\`

## Reading Data

\`\`\`python
df = pd.read_csv('data.csv')
df = pd.read_json('data.json')
df = pd.read_excel('data.xlsx')
\`\`\`

## Data Cleaning

\`\`\`python
df.isnull().sum()              # Count missing values
df.dropna()                    # Drop rows with NaN
df.fillna(0)                   # Fill NaN with 0
df.drop_duplicates()           # Remove duplicates
df['col'] = df['col'].astype(int)  # Type conversion
\`\`\``, {
              starterCode: `import numpy as np\n\n# NumPy operations\ndata = np.array([85, 92, 78, 95, 88, 73, 91, 86, 79, 94])\n\nprint("Student Scores Analysis")\nprint(f"Mean:   {data.mean():.1f}")\nprint(f"Median: {np.median(data):.1f}")\nprint(f"Std:    {data.std():.1f}")\nprint(f"Min:    {data.min()}")\nprint(f"Max:    {data.max()}")\n\n# Simulating Pandas-like analysis\nstudents = [\n    {"name": "Alice", "score": 92, "grade": "A"},\n    {"name": "Bob", "score": 85, "grade": "B"},\n    {"name": "Charlie", "score": 78, "grade": "C"},\n    {"name": "Diana", "score": 95, "grade": "A"},\n]\n\navg = sum(s["score"] for s in students) / len(students)\nprint(f"\\nAverage score: {avg:.1f}")\n\nhigh_performers = [s for s in students if s["score"] >= 90]\nprint(f"High performers: {[s['name'] for s in high_performers]}")`,
              solutionCode: `import numpy as np\n\ndata = np.array([85, 92, 78, 95, 88, 73, 91, 86, 79, 94])\nprint("Student Scores Analysis")\nprint(f"Mean:   {data.mean():.1f}")\nprint(f"Median: {np.median(data):.1f}")\nprint(f"Std:    {data.std():.1f}")\nprint(f"Min:    {data.min()}")\nprint(f"Max:    {data.max()}")\n\nstudents = [\n    {"name": "Alice", "score": 92, "grade": "A"},\n    {"name": "Bob", "score": 85, "grade": "B"},\n    {"name": "Charlie", "score": 78, "grade": "C"},\n    {"name": "Diana", "score": 95, "grade": "A"},\n]\n\navg = sum(s["score"] for s in students) / len(students)\nprint(f"\\nAverage score: {avg:.1f}")\n\nhigh_performers = [s for s in students if s["score"] >= 90]\nprint(f"High performers: {[s['name'] for s in high_performers]}")`,
              codeLanguage: 'python',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('NumPy & Pandas Quiz', [
                mcq('What makes NumPy operations fast?', 'Vectorized operations on arrays', ['Parallel processing', 'Caching'], 'NumPy operates on entire arrays at once in optimized C code.'),
                mcq('How do you filter rows in Pandas?', 'df[df["column"] > value]', ['df.filter(column > value)', 'df.where(column > value)'], 'Boolean indexing: pass a condition inside brackets.'),
                trueFalse('Pandas can read CSV, JSON, Excel, and SQL data.', true),
              ]),
            }),
          ],
        },
      ],
    },

    {
      title: 'Machine Learning Basics',
      slug: 'machine-learning-basics',
      description: 'Understand core ML concepts — regression, classification, clustering, model evaluation, and scikit-learn.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'Machine Learning Course', url: 'https://www.youtube.com/watch?v=NWONeJKn6kc', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'article', title: 'scikit-learn Documentation', url: 'https://scikit-learn.org/stable/', author: 'scikit-learn' },
      ],
      modules: [
        {
          title: 'Supervised Learning',
          lessons: [
            lesson('Regression & Classification', 'regression-classification', `# Regression & Classification

## Supervised Learning
Learn from labeled data to make predictions.

## Linear Regression
Predict a continuous value (price, temperature).

\`\`\`python
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# Prepare data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Predict
predictions = model.predict(X_test)
score = model.score(X_test, y_test)  # R² score
\`\`\`

## Classification
Predict a category (spam/not spam, cat/dog).

\`\`\`python
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

predictions = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, predictions):.2%}")
print(classification_report(y_test, predictions))
\`\`\`

## Model Evaluation Metrics

### Regression
- **R² Score**: How well the model fits (0-1)
- **MAE**: Mean Absolute Error
- **RMSE**: Root Mean Squared Error

### Classification
- **Accuracy**: % correct predictions
- **Precision**: Of predicted positives, how many are correct?
- **Recall**: Of actual positives, how many were found?
- **F1 Score**: Harmonic mean of precision and recall

## The ML Workflow
1. Collect & clean data
2. Explore & visualize
3. Feature engineering
4. Train/test split
5. Train the model
6. Evaluate performance
7. Tune hyperparameters
8. Deploy`, {
              starterCode: `# ML concepts demo\nimport random\n\n# Simulate a simple linear regression\n# y = 2x + 3 + noise\ndef generate_data(n=20):\n    X = [random.uniform(0, 10) for _ in range(n)]\n    y = [2 * x + 3 + random.gauss(0, 1) for x in X]\n    return X, y\n\nX, y = generate_data()\n\n# Simple mean-based prediction\nmean_x = sum(X) / len(X)\nmean_y = sum(y) / len(y)\n\n# Calculate slope and intercept\nnumerator = sum((X[i] - mean_x) * (y[i] - mean_y) for i in range(len(X)))\ndenominator = sum((X[i] - mean_x) ** 2 for i in range(len(X)))\n\nslope = numerator / denominator\nintercept = mean_y - slope * mean_x\n\nprint(f"Learned model: y = {slope:.2f}x + {intercept:.2f}")\nprint(f"True model:    y = 2.00x + 3.00")\n\n# Make predictions\ntest_x = [1, 5, 10]\nfor x in test_x:\n    pred = slope * x + intercept\n    actual = 2 * x + 3\n    print(f"x={x}: predicted={pred:.1f}, actual={actual:.1f}")`,
              solutionCode: `import random\n\ndef generate_data(n=20):\n    X = [random.uniform(0, 10) for _ in range(n)]\n    y = [2 * x + 3 + random.gauss(0, 1) for x in X]\n    return X, y\n\nX, y = generate_data()\nmean_x = sum(X) / len(X)\nmean_y = sum(y) / len(y)\n\nnumerator = sum((X[i] - mean_x) * (y[i] - mean_y) for i in range(len(X)))\ndenominator = sum((X[i] - mean_x) ** 2 for i in range(len(X)))\n\nslope = numerator / denominator\nintercept = mean_y - slope * mean_x\n\nprint(f"Learned: y = {slope:.2f}x + {intercept:.2f}")\nprint(f"True:    y = 2.00x + 3.00")\n\nfor x in [1, 5, 10]:\n    pred = slope * x + intercept\n    actual = 2 * x + 3\n    print(f"x={x}: predicted={pred:.1f}, actual={actual:.1f}")`,
              codeLanguage: 'python',
              estimatedMinutes: 30,
              xpReward: 70,
              quiz: quiz('Regression & Classification Quiz', [
                mcq('What type of ML predicts continuous values?', 'Regression', ['Classification', 'Clustering'], 'Regression predicts continuous outputs (price, temperature).'),
                mcq('What metric measures classification correctness?', 'Accuracy', ['R² Score', 'RMSE'], 'Accuracy = correct predictions / total predictions.'),
                trueFalse('Overfitting means the model performs well on training data but poorly on new data.', true),
              ]),
            }),
          ],
        },
      ],
    },

    {
      title: 'Deep Learning with PyTorch',
      slug: 'deep-learning-pytorch',
      description: 'Build neural networks with PyTorch — perceptrons, CNNs, RNNs, and transformers for image and text processing.',
      difficulty: 'advanced',
      language: 'en',
      estimatedHours: 30,
      resources: [
        { resourceType: 'article', title: 'PyTorch Official Tutorials', url: 'https://pytorch.org/tutorials/', author: 'PyTorch' },
        { resourceType: 'youtube', title: 'Deep Learning with PyTorch', url: 'https://www.youtube.com/watch?v=V_xro1bcAuU', author: 'freeCodeCamp', platform: 'YouTube' },
      ],
      modules: [
        {
          title: 'Neural Network Basics',
          lessons: [
            lesson('Perceptrons & Backpropagation', 'perceptrons-backprop', `# Perceptrons & Backpropagation

## What is a Neural Network?
A function that learns to map inputs to outputs by adjusting internal weights.

## The Perceptron

\`\`\`
Input₁ ──(w₁)──┐
Input₂ ──(w₂)──┤─→ Σ(w·x + b) ─→ activation ─→ Output
Input₃ ──(w₃)──┘
\`\`\`

## Activation Functions

\`\`\`python
# ReLU: max(0, x) — most common
# Sigmoid: 1 / (1 + e^(-x)) — outputs 0-1
# Tanh: (e^x - e^(-x)) / (e^x + e^(-x)) — outputs -1 to 1
# Softmax: e^xi / Σ(e^xj) — multi-class probabilities
\`\`\`

## Building in PyTorch

\`\`\`python
import torch
import torch.nn as nn

class SimpleNet(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(784, 128)   # Input → Hidden
        self.fc2 = nn.Linear(128, 64)    # Hidden → Hidden
        self.fc3 = nn.Linear(64, 10)     # Hidden → Output
        self.relu = nn.ReLU()
    
    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.relu(self.fc2(x))
        x = self.fc3(x)
        return x
\`\`\`

## Training Loop

\`\`\`python
model = SimpleNet()
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

for epoch in range(10):
    for inputs, labels in dataloader:
        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, labels)
        loss.backward()   # Backpropagation
        optimizer.step()  # Update weights
\`\`\`

## Key Concepts
- **Forward pass**: Input → prediction
- **Loss function**: Measures prediction error
- **Backpropagation**: Computes gradients
- **Optimizer**: Updates weights to reduce loss`, {
              starterCode: `# Neural network from scratch (no PyTorch)\nimport random\nimport math\n\n# Simple perceptron for AND gate\ndef sigmoid(x):\n    return 1 / (1 + math.exp(-x))\n\n# Training data for AND gate\ndata = [\n    ([0, 0], 0),\n    ([0, 1], 0),\n    ([1, 0], 0),\n    ([1, 1], 1),\n]\n\n# Initialize random weights\nw1 = random.uniform(-1, 1)\nw2 = random.uniform(-1, 1)\nbias = random.uniform(-1, 1)\nlr = 1.0  # Learning rate\n\n# Train for 1000 epochs\nfor epoch in range(1000):\n    for inputs, target in data:\n        # Forward pass\n        output = sigmoid(inputs[0]*w1 + inputs[1]*w2 + bias)\n        # Error\n        error = target - output\n        # Update weights (gradient descent)\n        w1 += lr * error * output * (1-output) * inputs[0]\n        w2 += lr * error * output * (1-output) * inputs[1]\n        bias += lr * error * output * (1-output)\n\n# Test\nprint("AND Gate Perceptron:")\nfor inputs, target in data:\n    output = sigmoid(inputs[0]*w1 + inputs[1]*w2 + bias)\n    print(f"  {inputs} → {output:.3f} (target: {target})")`,
              solutionCode: `import random\nimport math\n\ndef sigmoid(x):\n    return 1 / (1 + math.exp(-x))\n\ndata = [([0,0],0), ([0,1],0), ([1,0],0), ([1,1],1)]\nw1 = random.uniform(-1, 1)\nw2 = random.uniform(-1, 1)\nbias = random.uniform(-1, 1)\nlr = 1.0\n\nfor epoch in range(1000):\n    for inputs, target in data:\n        output = sigmoid(inputs[0]*w1 + inputs[1]*w2 + bias)\n        error = target - output\n        w1 += lr * error * output * (1-output) * inputs[0]\n        w2 += lr * error * output * (1-output) * inputs[1]\n        bias += lr * error * output * (1-output)\n\nprint("AND Gate Perceptron:")\nfor inputs, target in data:\n    output = sigmoid(inputs[0]*w1 + inputs[1]*w2 + bias)\n    print(f"  {inputs} -> {output:.3f} (target: {target})")`,
              codeLanguage: 'python',
              estimatedMinutes: 30,
              xpReward: 80,
              quiz: quiz('Neural Networks Quiz', [
                mcq('What does backpropagation compute?', 'Gradients of the loss with respect to each weight', ['The final prediction', 'The learning rate'], 'Backpropagation calculates how much each weight contributes to the error.'),
                mcq('What activation function is most commonly used in hidden layers?', 'ReLU', ['Sigmoid', 'Softmax'], 'ReLU is simple, fast, and avoids vanishing gradient problems.'),
                trueFalse('A neural network with 0 hidden layers is equivalent to logistic regression.', true),
              ]),
            }),
          ],
        },
      ],
    },

    {
      title: 'Prompt Engineering',
      slug: 'prompt-engineering',
      description: 'Master the art of communicating with Large Language Models — effective prompting, few-shot learning, chain-of-thought, and RAG patterns.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 10,
      resources: [
        { resourceType: 'article', title: 'Prompt Engineering Guide', url: 'https://www.promptingguide.ai/', author: 'DAIR.AI' },
        { resourceType: 'article', title: 'OpenAI Best Practices', url: 'https://platform.openai.com/docs/guides/prompt-engineering', author: 'OpenAI' },
      ],
      modules: [
        {
          title: 'Prompting Techniques',
          lessons: [
            lesson('Effective Prompts', 'effective-prompts', `# Effective Prompts

## Why Prompting Matters
The quality of your output depends on the quality of your input.

## Key Principles

### 1. Be Specific

\`\`\`
❌ "Write about Python"
✅ "Write a 200-word beginner-friendly explanation of Python lists, including 3 code examples"
\`\`\`

### 2. Provide Context

\`\`\`
"You are a senior Python developer reviewing code.
Review this function for bugs, performance issues, and style violations:
[code]"
\`\`\`

### 3. Few-Shot Prompting

\`\`\`
Classify the sentiment of these reviews:

Review: "This product is amazing!" → Positive
Review: "Terrible quality, broke in a day" → Negative
Review: "It works but nothing special" → Neutral

Review: "Best purchase I've ever made!" → ?
\`\`\`

### 4. Chain-of-Thought

\`\`\`
"Solve this step by step:
If a train travels 120 km in 2 hours, what is its speed?
Think through each step before giving the answer."
\`\`\`

### 5. Role Assignment

\`\`\`
"Act as a database architect. Design a schema for an
e-commerce platform. Consider normalization, indexes,
and common query patterns."
\`\`\`

## Advanced Patterns
- **System + User messages**: Separate instructions from data
- **RAG (Retrieval Augmented Generation)**: Feed relevant context
- **Self-Consistency**: Ask the model to verify its own answer`, {
              starterCode: `# Prompt engineering examples\n\n# Bad prompt\nbad_prompt = "Tell me about sorting"\nprint("Bad prompt:", bad_prompt)\n\n# Good prompt with specificity\ngood_prompt = """Explain the QuickSort algorithm to a CS student who\nunderstands basic loops. Include:\n1. How the pivot selection works\n2. The partitioning step  \n3. Time complexity (best, average, worst)\n4. A Python implementation under 15 lines"""\n\nprint("\\nGood prompt:", good_prompt)\n\n# Few-shot prompt\nfew_shot = """Classify programming languages:\n\nPython → Interpreted, Dynamic\nJava → Compiled, Static\nJavaScript → Interpreted, Dynamic\n\nTypeScript → ?"""\n\nprint("\\nFew-shot:", few_shot)\nprint("Expected: Compiled (transpiled), Static")`,
              solutionCode: `bad_prompt = "Tell me about sorting"\nprint("Bad prompt:", bad_prompt)\n\ngood_prompt = """Explain the QuickSort algorithm to a CS student who\nunderstands basic loops. Include:\n1. How the pivot selection works\n2. The partitioning step\n3. Time complexity\n4. A Python implementation"""\nprint("\\nGood prompt:", good_prompt)\n\nfew_shot = """Classify programming languages:\nPython → Interpreted, Dynamic\nJava → Compiled, Static\nJavaScript → Interpreted, Dynamic\nTypeScript → ?"""\nprint("\\nFew-shot:", few_shot)\nprint("Expected: Compiled (transpiled), Static")`,
              codeLanguage: 'python',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('Prompt Engineering Quiz', [
                mcq('What is few-shot prompting?', 'Providing examples in the prompt to guide the model', ['Training the model from scratch', 'Using a small model'], 'Few-shot gives examples so the model understands the desired pattern.'),
                mcq('What does Chain-of-Thought prompting do?', 'Encourages the model to show reasoning steps', ['Makes responses shorter', 'Prevents hallucination'], 'CoT prompting improves accuracy by forcing step-by-step reasoning.'),
                trueFalse('More specific prompts generally produce better results.', true),
              ]),
            }),
          ],
        },
      ],
    },
  ],
};
