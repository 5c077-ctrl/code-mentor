import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const aiMlCategory: CategoryDef = {
  name: 'AI & Machine Learning',
  slug: 'ai-ml',
  description: 'Master Artificial Intelligence, Python data science, machine learning models, PyTorch deep learning, and Prompt Engineering for LLMs.',
  icon: '🤖',
  color: '#ec4899',
  sortOrder: 6,
  courses: [
    // ━━━━━━━━━━━━━━━━━━━ PYTHON FOR DATA SCIENCE ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Python for Data Science',
      slug: 'python-data-science',
      description: 'Master data analysis with NumPy, Pandas, Matplotlib, and Seaborn for data manipulation, visualization, and feature engineering.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'Python for Data Science Full Course', url: 'https://www.youtube.com/watch?v=LHBE6Q9XlzI', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Pandas & NumPy Complete Tutorial', url: 'https://www.youtube.com/watch?v=vmEHCJofslg', author: 'Keith Galli', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Matplotlib & Seaborn Data Visualization', url: 'https://www.youtube.com/watch?v=3Xc3CA655Y4', author: 'Corey Schafer', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Data Cleaning & Feature Engineering Masterclass', url: 'https://www.youtube.com/watch?v=bDhvCp3_lYw', author: 'Ken Jee', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Jupyter Notebooks & Data Science Workflow', url: 'https://www.youtube.com/watch?v=HW29067qVWk', author: 'Data School', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Python Data Science Handbook (Free eBook)', url: 'https://jakevdp.github.io/PythonDataScienceHandbook/', author: 'Jake VanderPlas' },
        { resourceType: 'article', title: 'Pandas Official User Guide & API Documentation', url: 'https://pandas.pydata.org/docs/user_guide/index.html', author: 'Pandas Core Team' },
        { resourceType: 'cheatsheet', title: 'Pandas & NumPy Quick Reference Cheat Sheet', url: 'https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf', author: 'Pandas' },
        { resourceType: 'article', title: 'Kaggle Learn — Data Science & Machine Learning Micro-courses', url: 'https://www.kaggle.com/learn', author: 'Kaggle' },
        { resourceType: 'cheatsheet', title: 'Matplotlib & Seaborn Visualization Reference', url: 'https://quickref.me/python', author: 'QuickRef' },
      ],
      modules: [
        {
          title: 'Module 1: Scientific Computing with NumPy',
          lessons: [
            setupLesson('Python for Data Science', 'python-data-science', 'python',
              `1. Install Python 3.11+ and Jupyter: \`pip install numpy pandas matplotlib seaborn jupyter\`\n2. Launch notebook: \`jupyter notebook\`\n3. Test: \`import numpy as np; print(np.__version__)\``,
              `import numpy as np\nprint("NumPy Version:", np.__version__)`,
              `import numpy as np\nprint("NumPy Version:", np.__version__)`
            ),
            lesson('NumPy N-Dimensional Arrays (`np.array`)', 'numpy-arrays', `# NumPy Arrays\n\nCreate fast vectorized arrays: \`arr = np.array([1, 2, 3])\`. Compare against standard Python lists.`, {
              starterCode: `import numpy as np\narr = np.array([10, 20, 30])\nprint("Shape:", arr.shape, "Dtype:", arr.dtype)`,
              solutionCode: `import numpy as np\narr = np.array([10, 20, 30])\nprint("Shape:", arr.shape, "Dtype:", arr.dtype)`,
              codeLanguage: 'python',
              quiz: quiz('NumPy Arrays Quiz', [
                mcq('Why are NumPy arrays faster than standard Python lists for numeric computations?', 'NumPy stores homogenous typed data in contiguous memory blocks', ['NumPy runs on GPU only', 'NumPy compresses text'], 'Contiguous typed memory enables vectorized CPU processing.'),
              ]),
            }),
            lesson('Vectorized Operations & Broadcasting', 'numpy-vectorization', `# Vectorization\n\nPerform element-wise math without explicit loops: \`arr * 2\` or matrix math with broadcasting rules.`, {
              starterCode: `import numpy as np\na = np.array([1, 2, 3])\nb = np.array([10, 20, 30])\nprint(a + b)`,
              solutionCode: `import numpy as np\na = np.array([1, 2, 3])\nb = np.array([10, 20, 30])\nprint(a + b)`,
              codeLanguage: 'python',
              quiz: quiz('Vectorization Quiz', [
                trueFalse('Broadcasting allows NumPy to perform arithmetic operations on arrays of different compatible shapes.', true),
              ]),
            }),
            lesson('Array Slicing, Reshaping & Indexing', 'numpy-slicing', `# Reshaping & Slicing\n\nReshape arrays with \`arr.reshape(3, 4)\` and filter with boolean indexing: \`arr[arr > 5]\`.`, {
              starterCode: `import numpy as np\nmatrix = np.arange(12).reshape(3, 4)\nprint(matrix[matrix > 5])`,
              solutionCode: `import numpy as np\nmatrix = np.arange(12).reshape(3, 4)\nprint(matrix[matrix > 5])`,
              codeLanguage: 'python',
              quiz: quiz('NumPy Slicing Quiz', [
                mcq('Which method changes array dimensions without altering underlying data?', 'reshape()', ['slice()', 'flatten()'], '`reshape()` alters array dimensions.'),
              ]),
            }),
            lesson('Linear Algebra & Statistics in NumPy', 'numpy-stats', `# NumPy Statistics\n\nCalculate \`np.mean()\`, \`np.std()\`, \`np.median()\`, and matrix products \`np.dot()\`.`, {
              starterCode: `import numpy as np\ndata = np.array([10, 20, 30, 40, 50])\nprint("Mean:", np.mean(data), "Std Dev:", np.std(data))`,
              solutionCode: `import numpy as np\ndata = np.array([10, 20, 30, 40, 50])\nprint("Mean:", np.mean(data), "Std Dev:", np.std(data))`,
              codeLanguage: 'python',
              quiz: quiz('NumPy Stats Quiz', [
                mcq('Which function computes the standard deviation of an array?', 'np.std()', ['np.mean()', 'np.var()'], '`np.std()` computes standard deviation.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Data Manipulation with Pandas',
          lessons: [
            lesson('Pandas Series & DataFrames', 'pandas-series-dataframe', `# DataFrames\n\nTabular data structures with indexed rows and named columns: \`df = pd.DataFrame(data)\`.`, {
              starterCode: `import pandas as pd\ndata = {"name": ["Alice", "Bob"], "age": [25, 30]}\ndf = pd.DataFrame(data)\nprint(df)`,
              solutionCode: `import pandas as pd\ndata = {"name": ["Alice", "Bob"], "age": [25, 30]}\ndf = pd.DataFrame(data)\nprint(df)`,
              codeLanguage: 'python',
              quiz: quiz('Pandas DataFrame Quiz', [
                mcq('What primary 2D data structure does Pandas use for tabular datasets?', 'DataFrame', ['Series', 'Matrix'], '`DataFrame` is the 2D tabular data structure in Pandas.'),
              ]),
            }),
            lesson('Data Ingestion & Selection (`read_csv`, `.loc`, `.iloc`)', 'pandas-io-selection', `# Data Selection\n\nRead CSV files with \`pd.read_csv()\`. Select by label with \`.loc[]\` and integer index with \`.iloc[]\`.`, {
              starterCode: `import pandas as pd\ndf = pd.DataFrame({"A": [1, 2], "B": [3, 4]}, index=["row1", "row2"])\nprint(df.loc["row1"])\nprint(df.iloc[0])`,
              solutionCode: `import pandas as pd\ndf = pd.DataFrame({"A": [1, 2], "B": [3, 4]}, index=["row1", "row2"])\nprint(df.loc["row1"])\nprint(df.iloc[0])`,
              codeLanguage: 'python',
              quiz: quiz('Pandas Selection Quiz', [
                mcq('What selector method uses integer position-based indexing?', '.iloc[]', ['.loc[]', '.at[]'], '`.iloc[]` uses 0-based integer positions.'),
              ]),
            }),
            lesson('Data Cleaning & Missing Value Handling (`dropna`, `fillna`)', 'pandas-data-cleaning', `# Data Cleaning\n\nIdentify null values with \`df.isnull()\`, fill missing values with \`df.fillna()\`, or drop with \`df.dropna()\`.`, {
              starterCode: `import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({"score": [90, np.nan, 80]})\ndf["score"] = df["score"].fillna(df["score"].mean())\nprint(df)`,
              solutionCode: `import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({"score": [90, np.nan, 80]})\ndf["score"] = df["score"].fillna(df["score"].mean())\nprint(df)`,
              codeLanguage: 'python',
              quiz: quiz('Data Cleaning Quiz', [
                trueFalse('`fillna(mean_value)` replaces missing NaN values with the calculated column mean.', true),
              ]),
            }),
            lesson('Grouping & Aggregations (`groupby`, `pivot_table`)', 'pandas-groupby', `# Grouping & Pivoting\n\nGroup data with \`df.groupby('category').mean()\` and build pivot summary tables.`, {
              starterCode: `import pandas as pd\ndf = pd.DataFrame({"dept": ["HR", "IT", "IT"], "salary": [50000, 80000, 90000]})\nprint(df.groupby("dept").mean())`,
              solutionCode: `import pandas as pd\ndf = pd.DataFrame({"dept": ["HR", "IT", "IT"], "salary": [50000, 80000, 90000]})\nprint(df.groupby("dept").mean())`,
              codeLanguage: 'python',
              quiz: quiz('Pandas GroupBy Quiz', [
                mcq('What operation splits data into groups, applies an aggregate function, and combines results?', 'Split-Apply-Combine (groupby)', ['Join-Merge', 'Pivot-Sort'], '`groupby` follows the split-apply-combine strategy.'),
              ]),
            }),
            lesson('Merging & Joining DataFrames (`merge`, `concat`)', 'pandas-merging', `# Merging\n\nCombine DataFrames: \`pd.merge(df1, df2, on='id', how='inner')\` and concatenate: \`pd.concat([df1, df2])\`.`, {
              starterCode: `import pandas as pd\ndf1 = pd.DataFrame({"id": [1, 2], "name": ["Alice", "Bob"]})\ndf2 = pd.DataFrame({"id": [1, 2], "score": [95, 88]})\nmerged = pd.merge(df1, df2, on="id")\nprint(merged)`,
              solutionCode: `import pandas as pd\ndf1 = pd.DataFrame({"id": [1, 2], "name": ["Alice", "Bob"]})\ndf2 = pd.DataFrame({"id": [1, 2], "score": [95, 88]})\nmerged = pd.merge(df1, df2, on="id")\nprint(merged)`,
              codeLanguage: 'python',
              quiz: quiz('Pandas Merge Quiz', [
                mcq('Which parameter specifies the join type in `pd.merge()`?', 'how="inner" (or "left", "right", "outer")', ['type=', 'join='], 'The `how` parameter specifies join strategy.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Visualization & Exploratory Analysis',
          lessons: [
            lesson('Data Visualization with Matplotlib', 'matplotlib-basics', `# Matplotlib\n\nCreate line plots, bar charts, and scatter plots: \`plt.plot()\`, \`plt.xlabel()\`, \`plt.show()\`.`, {
              starterCode: `import matplotlib.pyplot as plt\nx = [1, 2, 3]\ny = [10, 20, 30]\nplt.plot(x, y)\nplt.title("Sample Plot")`,
              solutionCode: `import matplotlib.pyplot as plt\nx = [1, 2, 3]\ny = [10, 20, 30]\nplt.plot(x, y)\nplt.title("Sample Plot")`,
              codeLanguage: 'python',
              quiz: quiz('Matplotlib Quiz', [
                mcq('What function renders and displays Matplotlib plots on screen?', 'plt.show()', ['plt.render()', 'plt.draw()'], '`plt.show()` displays the plot window.'),
              ]),
            }),
            lesson('Statistical Plots with Seaborn (`sns.heatmap`, `sns.boxplot`)', 'seaborn-stats-plots', `# Seaborn\n\nRender heatmaps, correlation matrices (\`sns.heatmap(df.corr())\`), and distribution boxplots.`, {
              starterCode: `import seaborn as sns\nimport matplotlib.pyplot as plt\ndata = [[1, 2], [3, 4]]\nsns.heatmap(data, annot=True)`,
              solutionCode: `import seaborn as sns\nimport matplotlib.pyplot as plt\ndata = [[1, 2], [3, 4]]\nsns.heatmap(data, annot=True)`,
              codeLanguage: 'python',
              quiz: quiz('Seaborn Quiz', [
                trueFalse('Seaborn builds on top of Matplotlib and integrates directly with Pandas DataFrames.', true),
              ]),
            }),
            lesson('Feature Engineering & One-Hot Encoding', 'feature-engineering', `# Feature Engineering\n\nConvert categorical columns to numeric using \`pd.get_dummies()\` and scale features with \`StandardScaler\`.`, {
              starterCode: `import pandas as pd\ndf = pd.DataFrame({"city": ["Paris", "Tokyo", "Paris"]})\nencoded = pd.get_dummies(df, columns=["city"])\nprint(encoded)`,
              solutionCode: `import pandas as pd\ndf = pd.DataFrame({"city": ["Paris", "Tokyo", "Paris"]})\nencoded = pd.get_dummies(df, columns=["city"])\nprint(encoded)`,
              codeLanguage: 'python',
              quiz: quiz('Feature Engineering Quiz', [
                mcq('Why convert categorical text labels into numerical One-Hot encodings?', 'Machine Learning models require numeric matrix inputs', ['To save file size', 'To speed up CSV saves'], 'ML algorithms require numerical input matrices.'),
              ]),
            }),
            lesson('Exploratory Data Analysis (EDA) Workflow', 'eda-workflow', `# EDA Workflow\n\nPerform full exploratory analysis: Shape inspection, summary statistics (\`df.describe()\`), missingness, and correlation.`, {
              starterCode: `import pandas as pd\ndf = pd.DataFrame({"age": [20, 30, 40], "income": [50k, 70k, 90k]})\nprint(df.describe())`,
              solutionCode: `import pandas as pd\ndf = pd.DataFrame({"age": [20, 30, 40], "income": [50000, 70000, 90000]})\nprint(df.describe())`,
              codeLanguage: 'python',
              quiz: quiz('EDA Quiz', [
                mcq('Which Pandas method provides summary statistics (mean, std, min, max, percentiles)?', 'df.describe()', ['df.info()', 'df.summary()'], '`describe()` generates summary statistics.'),
              ]),
            }),
            lesson('Data Science Capstone: End-to-End Housing Market Analysis', 'data-science-capstone', `# Data Science Capstone\n\nPerform end-to-end analysis: Load dataset → Clean NaNs → Engineer features → Plot correlations → Export summary.`, {
              starterCode: `print("=== END-TO-END DATA SCIENCE PIPELINE COMPLETE ===")`,
              solutionCode: `print("=== END-TO-END DATA SCIENCE PIPELINE COMPLETE ===")`,
              codeLanguage: 'python',
              quiz: quiz('DS Capstone Quiz', [
                mcq('What percentage of a data scientist\'s project time is typically spent on data cleaning & EDA?', '60% - 80%', ['5%', '100%'], 'Data cleaning and EDA account for the vast majority of project effort.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ MACHINE LEARNING BASICS ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Machine Learning Basics',
      slug: 'machine-learning-basics',
      description: 'Master core Scikit-Learn algorithms — Linear Regression, Decision Trees, Random Forests, K-Means clustering, and evaluation metrics.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'Machine Learning Full Course for Beginners', url: 'https://www.youtube.com/watch?v=i_LwzRVP7bg', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'StatQuest: Machine Learning Fundamentals', url: 'https://www.youtube.com/watch?v=Gv9_4yMHFhI', author: 'Josh Starmer (StatQuest)', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Scikit-Learn Crash Course', url: 'https://www.youtube.com/watch?v=0B5eIE_1vpU', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Decision Trees & Random Forests Explained', url: 'https://www.youtube.com/watch?v=J4Wdy0Wc_xQ', author: 'StatQuest', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Supervised vs Unsupervised Learning in 10 Minutes', url: 'https://www.youtube.com/watch?v=1dAD61J516E', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Scikit-Learn Official User Guide & API Docs', url: 'https://scikit-learn.org/stable/user_guide.html', author: 'Scikit-Learn Developers' },
        { resourceType: 'article', title: 'Hands-On Machine Learning with Scikit-Learn Guide', url: 'https://github.com/ageron/handson-ml3', author: 'Aurélien Géron' },
        { resourceType: 'cheatsheet', title: 'Scikit-Learn Algorithm Selection Cheat Sheet', url: 'https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html', author: 'Scikit-Learn' },
        { resourceType: 'article', title: 'Towards Data Science Machine Learning Tutorials', url: 'https://towardsdatascience.com/', author: 'Towards Data Science' },
        { resourceType: 'cheatsheet', title: 'ML Metrics & Model Evaluation Cheat Sheet', url: 'https://quickref.me/python', author: 'QuickRef' },
      ],
      modules: [
        {
          title: 'Module 1: Supervised Learning & Regression',
          lessons: [
            setupLesson('Machine Learning Basics', 'machine-learning-basics', 'python',
              `1. Install Scikit-Learn: \`pip install scikit-learn numpy pandas\`\n2. Test: \`import sklearn; print(sklearn.__version__)\``,
              `import sklearn\nprint("Scikit-Learn Version:", sklearn.__version__)`,
              `import sklearn\nprint("Scikit-Learn Version:", sklearn.__version__)`
            ),
            lesson('Supervised vs Unsupervised vs Reinforcement Learning', 'ml-paradigm-intro', `# ML Paradigms\n\nSupervised (labeled data), Unsupervised (unlabeled clustering), Reinforcement (reward-based agents).`, {
              starterCode: `# Supervised: (Features X, Labels y) -> Model\n# Unsupervised: Features X -> Patterns/Clusters`,
              solutionCode: `# ML Paradigms`,
              codeLanguage: 'text',
              quiz: quiz('ML Paradigms Quiz', [
                mcq('What distinguishes Supervised Learning from Unsupervised Learning?', 'Supervised learning trains on labeled target output data', ['Supervised learning requires GPU', 'Unsupervised learning uses linear regression'], 'Supervised algorithms require labeled ground truth output targets.'),
              ]),
            }),
            lesson('Linear Regression (`LinearRegression`)', 'linear-regression', `# Linear Regression\n\nFit line of best fit: \`y = wx + b\`. Minimize Mean Squared Error (MSE) loss using Scikit-Learn.`, {
              starterCode: `from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3]])\ny = np.array([2, 4, 6])\nmodel = LinearRegression().fit(X, y)\nprint("Prediction for 4:", model.predict([[4]]))`,
              solutionCode: `from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3]])\ny = np.array([2, 4, 6])\nmodel = LinearRegression().fit(X, y)\nprint("Prediction for 4:", model.predict([[4]]))`,
              codeLanguage: 'python',
              quiz: quiz('Linear Regression Quiz', [
                mcq('What metric measures continuous regression error?', 'Mean Squared Error (MSE) / R-squared', ['Accuracy', 'F1-Score'], 'MSE measures squared differences between true and predicted targets.'),
              ]),
            }),
            lesson('Logistic Regression for Classification', 'logistic-regression', `# Logistic Regression\n\nClassify binary outcomes using Sigmoid activation: \`1 / (1 + e^-z)\`. Output probabilities between 0 and 1.`, {
              starterCode: `from sklearn.linear_model import LogisticRegression\nX = [[1], [2], [10], [12]]\ny = [0, 0, 1, 1]\nclf = LogisticRegression().fit(X, y)\nprint(clf.predict([[11]]))`,
              solutionCode: `from sklearn.linear_model import LogisticRegression\nX = [[1], [2], [10], [12]]\ny = [0, 0, 1, 1]\nclf = LogisticRegression().fit(X, y)\nprint(clf.predict([[11]]))`,
              codeLanguage: 'python',
              quiz: quiz('Logistic Regression Quiz', [
                mcq('Is Logistic Regression used for continuous regression or discrete classification?', 'Discrete Classification', ['Continuous Regression', 'Image compression'], 'Despite its name, Logistic Regression is a classification algorithm.'),
              ]),
            }),
            lesson('Train-Test Split & Cross-Validation (`train_test_split`)', 'train-test-split', `# Model Splitting\n\nSplit data into training and validation sets: \`train_test_split(X, y, test_size=0.2, random_state=42)\`.`, {
              starterCode: `from sklearn.model_selection import train_test_split\nimport numpy as np\nX, y = np.arange(10).reshape((5, 2)), range(5)\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nprint("Train shape:", X_train.shape)`,
              solutionCode: `from sklearn.model_selection import train_test_split\nimport numpy as np\nX, y = np.arange(10).reshape((5, 2)), range(5)\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nprint("Train shape:", X_train.shape)`,
              codeLanguage: 'python',
              quiz: quiz('Train Test Split Quiz', [
                trueFalse('Testing a model on the same data it was trained on leads to optimistic overestimation (overfitting).', true),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Tree-Based Models & Clustering',
          lessons: [
            lesson('Decision Trees (`DecisionTreeClassifier`)', 'decision-trees', `# Decision Trees\n\nSplit features based on Gini Impurity or Information Gain (Entropy).`, {
              starterCode: `from sklearn.tree import DecisionTreeClassifier\nX = [[0, 0], [1, 1]]\ny = [0, 1]\nclf = DecisionTreeClassifier().fit(X, y)\nprint(clf.predict([[1, 1]]))`,
              solutionCode: `from sklearn.tree import DecisionTreeClassifier\nX = [[0, 0], [1, 1]]\ny = [0, 1]\nclf = DecisionTreeClassifier().fit(X, y)\nprint(clf.predict([[1, 1]]))`,
              codeLanguage: 'python',
              quiz: quiz('Decision Tree Quiz', [
                mcq('What metric measures node impurity in Decision Trees?', 'Gini Impurity / Entropy', ['R-squared', 'MSE'], 'Gini Impurity measures probability of misclassification.'),
              ]),
            }),
            lesson('Random Forests & Ensemble Learning (`RandomForestClassifier`)', 'random-forests', `# Random Forests\n\nEnsemble of decision trees trained on bootstrapped data subsets (Bagging) to prevent overfitting.`, {
              starterCode: `from sklearn.ensemble import RandomForestClassifier\nX = [[0, 0], [1, 1]]\ny = [0, 1]\nrf = RandomForestClassifier(n_estimators=100).fit(X, y)\nprint(rf.predict([[0, 0]]))`,
              solutionCode: `from sklearn.ensemble import RandomForestClassifier\nX = [[0, 0], [1, 1]]\ny = [0, 1]\nrf = RandomForestClassifier(n_estimators=100).fit(X, y)\nprint(rf.predict([[0, 0]]))`,
              codeLanguage: 'python',
              quiz: quiz('Random Forest Quiz', [
                trueFalse('Random Forests combine multiple decision trees to reduce variance and combat overfitting.', true),
              ]),
            }),
            lesson('K-Means Clustering (`KMeans`)', 'kmeans-clustering', `# K-Means\n\nUnsupervised clustering: Group data points into K clusters by minimizing distance to cluster centroids.`, {
              starterCode: `from sklearn.cluster import KMeans\nimport numpy as np\nX = np.array([[1, 2], [1, 4], [10, 2], [10, 4]])\nkmeans = KMeans(n_clusters=2, random_state=0).fit(X)\nprint("Cluster centers:", kmeans.cluster_centers_)`,
              solutionCode: `from sklearn.cluster import KMeans\nimport numpy as np\nX = np.array([[1, 2], [1, 4], [10, 2], [10, 4]])\nkmeans = KMeans(n_clusters=2, random_state=0).fit(X)\nprint("Cluster centers:", kmeans.cluster_centers_)`,
              codeLanguage: 'python',
              quiz: quiz('K-Means Quiz', [
                mcq('What hyperparameter specifies the number of clusters in K-Means?', 'n_clusters (K)', ['max_iter', 'learning_rate'], '`n_clusters` defines the number of cluster centroids.'),
              ]),
            }),
            lesson('Dimensionality Reduction with PCA (`PCA`)', 'pca-dimensionality-reduction', `# PCA\n\nPrincipal Component Analysis reduces feature dimensions while preserving maximum variance.`, {
              starterCode: `from sklearn.decomposition import PCA\nimport numpy as np\nX = np.array([[-1, -1], [-2, -1], [1, 1], [2, 1]])\npca = PCA(n_components=1).fit(X)\nprint(pca.transform(X))`,
              solutionCode: `from sklearn.decomposition import PCA\nimport numpy as np\nX = np.array([[-1, -1], [-2, -1], [1, 1], [2, 1]])\npca = PCA(n_components=1).fit(X)\nprint(pca.transform(X))`,
              codeLanguage: 'python',
              quiz: quiz('PCA Quiz', [
                mcq('What is the primary objective of Principal Component Analysis (PCA)?', 'Reduce feature dimensionality while preserving maximum dataset variance', ['Classify images', 'Train neural networks'], 'PCA projects high-dimensional data onto orthogonal axes of maximum variance.'),
              ]),
            }),
            lesson('Hyperparameter Tuning with GridSearchCV', 'gridsearch-cv', `# Grid Search\n\nAutomate hyperparameter searching across a parameter grid: \`GridSearchCV(estimator, param_grid, cv=5)\`.`, {
              starterCode: `from sklearn.model_selection import GridSearchCV\nfrom sklearn.svm import SVC\nparam_grid = {'C': [0.1, 1, 10], 'kernel': ['linear', 'rbf']}\ngrid = GridSearchCV(SVC(), param_grid, cv=3)`,
              solutionCode: `from sklearn.model_selection import GridSearchCV`,
              codeLanguage: 'python',
              quiz: quiz('Grid Search Quiz', [
                trueFalse('GridSearchCV evaluates every combination of hyperparameter values specified in the grid.', true),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Model Evaluation & Metrics',
          lessons: [
            lesson('Classification Metrics (Precision, Recall, F1-Score)', 'classification-metrics', `# Metrics\n\nPrecision = TP / (TP + FP), Recall = TP / (TP + FN), F1-Score = Harmonic Mean.`, {
              starterCode: `from sklearn.metrics import classification_report\ny_true = [0, 1, 1, 0]\ny_pred = [0, 1, 0, 0]\nprint(classification_report(y_true, y_pred))`,
              solutionCode: `from sklearn.metrics import classification_report\ny_true = [0, 1, 1, 0]\ny_pred = [0, 1, 0, 0]\nprint(classification_report(y_true, y_pred))`,
              codeLanguage: 'python',
              quiz: quiz('Metrics Quiz', [
                mcq('Which metric measures the proportion of true positives out of all predicted positives?', 'Precision', ['Recall', 'Accuracy'], 'Precision = TP / (TP + FP).'),
              ]),
            }),
            lesson('Confusion Matrix & ROC-AUC Curves', 'confusion-matrix-roc', `# Confusion Matrix & ROC\n\nVisualize True Positives, False Positives, False Negatives, True Negatives, and Area Under ROC Curve (AUC).`, {
              starterCode: `from sklearn.metrics import confusion_matrix, roc_auc_score\ny_true = [0, 1, 1, 0]\ny_pred = [0, 1, 0, 0]\nprint(confusion_matrix(y_true, y_pred))`,
              solutionCode: `from sklearn.metrics import confusion_matrix, roc_auc_score\ny_true = [0, 1, 1, 0]\ny_pred = [0, 1, 0, 0]\nprint(confusion_matrix(y_true, y_pred))`,
              codeLanguage: 'python',
              quiz: quiz('ROC AUC Quiz', [
                mcq('What ROC-AUC score represents a perfect classification model?', '1.0', ['0.5', '0.0'], 'An AUC of 1.0 signifies perfect classification separation.'),
              ]),
            }),
            lesson('Handling Imbalanced Datasets (SMOTE & Class Weights)', 'imbalanced-datasets', `# Imbalanced Data\n\nBalance skewed classes using SMOTE synthetic oversampling or \`class_weight='balanced'\`.`, {
              starterCode: `from sklearn.ensemble import RandomForestClassifier\nclf = RandomForestClassifier(class_weight="balanced")`,
              solutionCode: `from sklearn.ensemble import RandomForestClassifier\nclf = RandomForestClassifier(class_weight="balanced")`,
              codeLanguage: 'python',
              quiz: quiz('Imbalanced Data Quiz', [
                trueFalse('`class_weight="balanced"` adjusts weights inversely proportional to class frequencies.', true),
              ]),
            }),
            lesson('Saving & Loading Models (`joblib`, `pickle`)', 'model-persistence', `# Saving Models\n\nSerialize trained models to disk: \`joblib.dump(model, 'model.joblib')\` and load: \`joblib.load()\`.`, {
              starterCode: `import joblib\nfrom sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\njoblib.dump(model, "model.joblib")\nloaded_model = joblib.load("model.joblib")`,
              solutionCode: `import joblib\nfrom sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\njoblib.dump(model, "model.joblib")\nloaded_model = joblib.load("model.joblib")`,
              codeLanguage: 'python',
              quiz: quiz('Model Persistence Quiz', [
                mcq('Which library is recommended by Scikit-Learn for serializing models efficiently?', 'joblib', ['json', 'csv'], '`joblib` handles large NumPy array serialization efficiently.'),
              ]),
            }),
            lesson('Machine Learning Capstone: Predictive Customer Churn System', 'ml-capstone', `# ML Capstone\n\nBuild an end-to-end churn predictor: Data Loading → Preprocessing → Random Forest Training → GridSearch → Evaluation → Export.`, {
              starterCode: `print("=== END-TO-END MACHINE LEARNING PIPELINE DEPLOYED ===")`,
              solutionCode: `print("=== END-TO-END MACHINE LEARNING PIPELINE DEPLOYED ===")`,
              codeLanguage: 'python',
              quiz: quiz('ML Capstone Quiz', [
                mcq('What workflow sequence characterizes production Machine Learning deployment?', 'Data Preprocessing -> Model Training -> Evaluation -> Serialization -> API Serving', ['Deploy -> Train -> Clean', 'Raw SQL -> Web UI'], 'Data preparation precedes model training and serving.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ DEEP LEARNING & PYTORCH ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Deep Learning & PyTorch',
      slug: 'deep-learning-pytorch',
      description: 'Master Neural Networks with PyTorch — Tensors, autograd, CNNs for computer vision, Transformers, and GPU acceleration.',
      difficulty: 'advanced',
      language: 'en',
      estimatedHours: 25,
      resources: [
        { resourceType: 'youtube', title: 'PyTorch for Deep Learning Full Course', url: 'https://www.youtube.com/watch?v=V_xro1bcAuA', author: 'FreeCodeCamp / Daniel Bourke', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Neural Networks from Scratch (NNFS)', url: 'https://www.youtube.com/watch?v=Wo5dMEP_BbI', author: 'sentdex', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Convolutional Neural Networks (CNNs) Explained', url: 'https://www.youtube.com/watch?v=YRhxdVk_sIs', author: '3Blue1Brown', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Transformers & Attention Mechanism (GPT Architecture)', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY', author: 'Andrej Karpathy', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'PyTorch Tensors & Autograd Deep Dive', url: 'https://www.youtube.com/watch?v=c36868dE3Xw', author: 'Aladdin Persson', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Deep Learning Book by Ian Goodfellow (Free Web Version)', url: 'https://www.deeplearningbook.org/', author: 'Ian Goodfellow & Yoshua Bengio' },
        { resourceType: 'article', title: 'PyTorch Official Documentation & Tutorials', url: 'https://pytorch.org/docs/stable/index.html', author: 'PyTorch Team' },
        { resourceType: 'cheatsheet', title: 'PyTorch Syntax & Tensor Operations Cheat Sheet', url: 'https://pytorch.org/tutorials/beginner/ptcheat.html', author: 'PyTorch' },
        { resourceType: 'article', title: 'The Annotated Transformer (Harvard NLP)', url: 'https://nlp.seas.harvard.edu/annotated-transformer/', author: 'Harvard NLP' },
        { resourceType: 'cheatsheet', title: 'PyTorch Neural Network Layers Reference', url: 'https://quickref.me/python', author: 'QuickRef' },
      ],
      modules: [
        {
          title: 'Module 1: PyTorch Tensors & Autograd',
          lessons: [
            setupLesson('Deep Learning & PyTorch', 'deep-learning-pytorch', 'python',
              `1. Install PyTorch: \`pip install torch torchvision torchaudio\`\n2. Verify CUDA GPU support: \`python -c "import torch; print(torch.cuda.is_available())"\``,
              `import torch\nprint("PyTorch Version:", torch.__version__, "CUDA:", torch.cuda.is_available())`,
              `import torch\nprint("PyTorch Version:", torch.__version__, "CUDA:", torch.cuda.is_available())`
            ),
            lesson('PyTorch Tensors & GPU CUDA Acceleration', 'pytorch-tensors', `# PyTorch Tensors\n\nCreate tensors: \`x = torch.tensor([1.0, 2.0])\`. Move to GPU: \`x = x.to('cuda')\`.`, {
              starterCode: `import torch\ndevice = "cuda" if torch.cuda.is_available() else "cpu"\nx = torch.ones(3, 3).to(device)\nprint("Tensor device:", x.device)`,
              solutionCode: `import torch\ndevice = "cuda" if torch.cuda.is_available() else "cpu"\nx = torch.ones(3, 3).to(device)\nprint("Tensor device:", x.device)`,
              codeLanguage: 'python',
              quiz: quiz('PyTorch Tensors Quiz', [
                mcq('How do you move a PyTorch tensor to GPU hardware acceleration?', 'tensor.to("cuda")', ['tensor.to_gpu()', 'tensor.cuda_enable()'], '`.to("cuda")` moves tensor data to GPU VRAM.'),
              ]),
            }),
            lesson('Automatic Differentiation (`autograd` & `.backward()`)', 'pytorch-autograd', `# Autograd\n\nCompute automatic gradients for backpropagation: \`loss.backward()\`. Inspect gradients in \`x.grad\`.`, {
              starterCode: `import torch\nx = torch.tensor(3.0, requires_grad=True)\ny = x ** 2\ny.backward()\nprint("dy/dx at x=3:", x.grad) # 2*3 = 6`,
              solutionCode: `import torch\nx = torch.tensor(3.0, requires_grad=True)\ny = x ** 2\ny.backward()\nprint("dy/dx at x=3:", x.grad)`,
              codeLanguage: 'python',
              quiz: quiz('Autograd Quiz', [
                mcq('Which flag enables gradient tracking on a PyTorch tensor?', 'requires_grad=True', ['track_grad=True', 'autograd=True'], '`requires_grad=True` tracks ops for backward pass.'),
              ]),
            }),
            lesson('Building Neural Networks (`nn.Module`)', 'pytorch-nn-module', `# nn.Module\n\nDefine layers in \`__init__\` and forward pass logic in \`forward(self, x)\`.`, {
              starterCode: `import torch\nimport torch.nn as nn\nclass MLP(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.fc = nn.Linear(10, 1)\n    def forward(self, x):\n        return self.fc(x)\nmodel = MLP()\nprint(model)`,
              solutionCode: `import torch\nimport torch.nn as nn\nclass MLP(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.fc = nn.Linear(10, 1)\n    def forward(self, x):\n        return self.fc(x)\nmodel = MLP()\nprint(model)`,
              codeLanguage: 'python',
              quiz: quiz('nn.Module Quiz', [
                trueFalse('All custom PyTorch neural network classes must inherit from `nn.Module`.', true),
              ]),
            }),
            lesson('Loss Functions & Optimizers (`Adam`, `SGD`)', 'pytorch-loss-optimizer', `# Loss & Optimizer\n\nLoss: \`nn.CrossEntropyLoss()\`. Optimizer: \`optimizer = torch.optim.Adam(model.parameters(), lr=0.001)\`.`, {
              starterCode: `import torch\nimport torch.nn as nn\nmodel = nn.Linear(2, 1)\noptimizer = torch.optim.Adam(model.parameters(), lr=0.01)\ncriterion = nn.MSELoss()`,
              solutionCode: `import torch\nimport torch.nn as nn\nmodel = nn.Linear(2, 1)\noptimizer = torch.optim.Adam(model.parameters(), lr=0.01)\ncriterion = nn.MSELoss()`,
              codeLanguage: 'python',
              quiz: quiz('Optimizer Quiz', [
                mcq('What sequence of steps updates model weights during an optimization step?', 'optimizer.zero_grad() -> loss.backward() -> optimizer.step()', ['step() -> zero_grad()', 'backward() -> zero_grad()'], 'Zero gradients, compute backward pass, and step optimizer.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Computer Vision & Convolutional Nets',
          lessons: [
            lesson('Convolutional Layers (`nn.Conv2d`, `nn.MaxPool2d`)', 'pytorch-cnns', `# Convolutional Neural Networks\n\nProcess image spatial features with 2D convolutions, ReLU activation, and Max Pooling.`, {
              starterCode: `import torch.nn as nn\nclass CNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.conv1 = nn.Conv2d(3, 16, kernel_size=3)\n        self.pool = nn.MaxPool2d(2, 2)\n    def forward(self, x):\n        return self.pool(self.conv1(x))`,
              solutionCode: `import torch.nn as nn\nclass CNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.conv1 = nn.Conv2d(3, 16, kernel_size=3)\n        self.pool = nn.MaxPool2d(2, 2)\n    def forward(self, x):\n        return self.pool(self.conv1(x))`,
              codeLanguage: 'python',
              quiz: quiz('CNN Quiz', [
                mcq('What layer reduces spatial dimensions of feature maps while retaining prominent features?', 'nn.MaxPool2d', ['nn.Linear', 'nn.Dropout'], 'Max pooling downsamples spatial grid dimensions.'),
              ]),
            }),
            lesson('Data Augmentation with torchvision transforms', 'torchvision-transforms', `# Torchvision Transforms\n\nAugment images with random crops, flips, and normalization: \`transforms.Compose([...])\`.`, {
              starterCode: `from torchvision import transforms\ntransform = transforms.Compose([\n    transforms.RandomHorizontalFlip(),\n    transforms.ToTensor(),\n    transforms.Normalize((0.5,), (0.5,))\n])`,
              solutionCode: `from torchvision import transforms\ntransform = transforms.Compose([\n    transforms.RandomHorizontalFlip(),\n    transforms.ToTensor(),\n    transforms.Normalize((0.5,), (0.5,))\n])`,
              codeLanguage: 'python',
              quiz: quiz('Transforms Quiz', [
                trueFalse('Data augmentation artificially expands training diversity to reduce overfitting.', true),
              ]),
            }),
            lesson('Transfer Learning with Pretrained Models (ResNet, EfficientNet)', 'transfer-learning', `# Transfer Learning\n\nLoad pretrained weights from \`torchvision.models.resnet50(weights="DEFAULT")\` and fine-tune classifier head.`, {
              starterCode: `import torchvision.models as models\nimport torch.nn as nn\nresnet = models.resnet18(weights="DEFAULT")\nresnet.fc = nn.Linear(resnet.fc.in_features, 10) # 10 classes`,
              solutionCode: `import torchvision.models as models\nimport torch.nn as nn\nresnet = models.resnet18(weights="DEFAULT")\nresnet.fc = nn.Linear(resnet.fc.in_features, 10)`,
              codeLanguage: 'python',
              quiz: quiz('Transfer Learning Quiz', [
                mcq('Why use Transfer Learning instead of training from scratch?', 'Leverages features learned from millions of images on ImageNet', ['Model runs without GPU', 'No Python code required'], 'Pretrained weights significantly speed up convergence on small datasets.'),
              ]),
            }),
            lesson('Recurrent Neural Networks (RNNs & LSTMs)', 'pytorch-rnns-lstms', `# LSTMs\n\nProcess sequential time-series and text data with \`nn.LSTM(input_size, hidden_size, num_layers)\`.`, {
              starterCode: `import torch.nn as nn\nlstm = nn.LSTM(input_size=10, hidden_size=20, num_layers=2)`,
              solutionCode: `import torch.nn as nn\nlstm = nn.LSTM(input_size=10, hidden_size=20, num_layers=2)`,
              codeLanguage: 'python',
              quiz: quiz('LSTM Quiz', [
                mcq('What problem in standard RNNs do LSTMs solve with gating mechanisms?', 'Vanishing and exploding gradients across long sequences', ['Slow disk read', 'High RAM usage'], 'LSTMs use memory gates to retain long-term sequence dependencies.'),
              ]),
            }),
            lesson('Attention Mechanism & Self-Attention Architecture', 'self-attention-mechanism', `# Self-Attention\n\nCalculate Query (Q), Key (K), and Value (V) attention weights: \`softmax((Q @ K.T) / sqrt(d_k)) @ V\`.`, {
              starterCode: `import torch\nimport torch.nn.functional as F\n# Scaled Dot-Product Attention: Softmax(Q K^T / sqrt(d_k)) V`,
              solutionCode: `# Scaled Dot-Product Attention`,
              codeLanguage: 'python',
              quiz: quiz('Attention Quiz', [
                trueFalse('Self-attention allows tokens in a sequence to dynamically weigh relationships with all other tokens simultaneously.', true),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Transformers & Fine-Tuning LLMs',
          lessons: [
            lesson('Transformer Architecture (Encoder-Decoder)', 'transformer-architecture', `# Transformers\n\nUnderstand Multi-Head Attention, Positional Encoding, Feed-Forward sublayers, and Residual connections.`, {
              starterCode: `import torch.nn as nn\nencoder_layer = nn.TransformerEncoderLayer(d_model=512, nhead=8)\ntransformer = nn.TransformerEncoder(encoder_layer, num_layers=6)`,
              solutionCode: `import torch.nn as nn\nencoder_layer = nn.TransformerEncoderLayer(d_model=512, nhead=8)\ntransformer = nn.TransformerEncoder(encoder_layer, num_layers=6)`,
              codeLanguage: 'python',
              quiz: quiz('Transformer Quiz', [
                mcq('What paper introduced the Transformer architecture in 2017?', '"Attention Is All You Need" (Vaswani et al.)', ['"Deep Residual Learning"', '"AlexNet"'], 'Vaswani et al. introduced Transformers in 2017.'),
              ]),
            }),
            lesson('Hugging Face Transformers (`AutoModelForCausalLM`)', 'huggingface-transformers', `# Hugging Face\n\nLoad pretrained LLMs (Llama, Mistral) using \`transformers\` pipeline and tokenizers.`, {
              starterCode: `from transformers import AutoTokenizer, AutoModelForCausalLM\ntokenizer = AutoTokenizer.from_pretrained("gpt2")\nmodel = AutoModelForCausalLM.from_pretrained("gpt2")`,
              solutionCode: `from transformers import AutoTokenizer, AutoModelForCausalLM\ntokenizer = AutoTokenizer.from_pretrained("gpt2")\nmodel = AutoModelForCausalLM.from_pretrained("gpt2")`,
              codeLanguage: 'python',
              quiz: quiz('Hugging Face Quiz', [
                trueFalse('Hugging Face Transformers library provides unified APIs for loading thousands of open-source LLM weights.', true),
              ]),
            }),
            lesson('Parameter-Efficient Fine-Tuning (LoRA & QLoRA)', 'peft-lora', `# LoRA\n\nLow-Rank Adaptation freezes base LLM weights and injects small trainable rank-decomposition matrices.`, {
              starterCode: `from peft import LoraConfig, get_peft_model\nconfig = LoraConfig(r=8, lora_alpha=32, target_modules=["q_proj", "v_proj"])`,
              solutionCode: `from peft import LoraConfig, get_peft_model\nconfig = LoraConfig(r=8, lora_alpha=32, target_modules=["q_proj", "v_proj"])`,
              codeLanguage: 'python',
              quiz: quiz('LoRA Quiz', [
                mcq('Why use LoRA (Low-Rank Adaptation) for fine-tuning LLMs?', 'Reduces trainable parameters by >99%, enabling fine-tuning on consumer GPUs', ['Increases model size', 'Deletes tokenizers'], 'LoRA drastically reduces VRAM requirements for fine-tuning.'),
              ]),
            }),
            lesson('Exporting Models for Production (`ONNX`, `TorchScript`)', 'torchscript-onnx', `# Exporting Models\n\nSerialize models with \`torch.jit.trace()\` or export to ONNX format for high-speed C++ runtime inference.`, {
              starterCode: `import torch\nmodel = torch.nn.Linear(10, 1)\nscripted_model = torch.jit.script(model)\nscripted_model.save("model.pt")`,
              solutionCode: `import torch\nmodel = torch.nn.Linear(10, 1)\nscripted_model = torch.jit.script(model)\nscripted_model.save("model.pt")`,
              codeLanguage: 'python',
              quiz: quiz('TorchScript Quiz', [
                trueFalse('TorchScript models can run in C++ environments without any Python runtime dependency.', true),
              ]),
            }),
            lesson('PyTorch Deep Learning Capstone: Vision Transformer & LLM Pipeline', 'pytorch-capstone', `# Deep Learning Capstone\n\nTrain a custom PyTorch model with GPU acceleration, evaluate validation loss, and export to TorchScript.`, {
              starterCode: `print("=== PYTORCH DEEP LEARNING MODEL DEPLOYED ON GPU ===")`,
              solutionCode: `print("=== PYTORCH DEEP LEARNING MODEL DEPLOYED ON GPU ===")`,
              codeLanguage: 'python',
              quiz: quiz('PyTorch Capstone Quiz', [
                mcq('What deep learning framework created by Meta AI is most widely used in modern AI research?', 'PyTorch', ['TensorFlow 1.0', 'Caffe'], 'PyTorch is the dominant framework in AI research.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ PROMPT ENGINEERING & LLMS ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Prompt Engineering & LLMs',
      slug: 'prompt-engineering-llms',
      description: 'Master AI prompt engineering — Few-shot prompting, Chain-of-Thought (CoT), RAG (Retrieval-Augmented Generation), and Agentic AI workflows.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'Prompt Engineering Course for Beginners', url: 'https://www.youtube.com/watch?v=_ZvnD73u40o', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Prompt Engineering 101: Chain-of-Thought & Few-Shot', url: 'https://www.youtube.com/watch?v=dOxUroR57xs', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'RAG (Retrieval Augmented Generation) Full Tutorial', url: 'https://www.youtube.com/watch?v=tcqEUSNCn8I', author: 'LangChain / TechLead', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Building Autonomous AI Agents with LangChain & LlamaIndex', url: 'https://www.youtube.com/watch?v=2xxziIWmaSA', author: 'James Briggs', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Anthropic Claude API & System Prompts Deep Dive', url: 'https://www.youtube.com/watch?v=gT5jK6_4x7w', author: 'Anthropic', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Prompt Engineering Guide (DAIR.AI Official)', url: 'https://www.promptingguide.ai/', author: 'DAIR.AI' },
        { resourceType: 'article', title: 'OpenAI Prompt Engineering Best Practices Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering', author: 'OpenAI' },
        { resourceType: 'cheatsheet', title: 'LangChain & Vector Database Quick Reference', url: 'https://quickref.me/python', author: 'QuickRef' },
        { resourceType: 'article', title: 'Anthropic Interactive Prompt Engineering Cookbook', url: 'https://github.com/anthropics/anthropic-cookbook', author: 'Anthropic' },
        { resourceType: 'cheatsheet', title: 'LlamaIndex RAG Architecture Cheat Sheet', url: 'https://docs.llamaindex.ai/', author: 'LlamaIndex' },
      ],
      modules: [
        {
          title: 'Module 1: Prompt Techniques & Architecture',
          lessons: [
            setupLesson('Prompt Engineering & LLMs', 'prompt-engineering-llms', 'python',
              `1. Install Anthropic SDK: \`pip install anthropic\`\n2. Set API key: \`export ANTHROPIC_API_KEY="sk-..."\`\n3. Test completion call in Python`,
              `import os\nprint("API Key Configured:", bool(os.getenv("ANTHROPIC_API_KEY")))`,
              `import os\nprint("API Key Configured:", bool(os.getenv("ANTHROPIC_API_KEY")))`
            ),
            lesson('Zero-Shot vs Few-Shot Prompting', 'zero-shot-few-shot', `# Prompting Types\n\nZero-shot (no examples) vs Few-shot (providing 2-3 input/output exemplar pairs in the prompt).`, {
              starterCode: `prompt = """Translate English to French:\nInput: Hello -> Bonjour\nInput: Goodbye -> Au revoir\nInput: Thank you ->"""`,
              solutionCode: `prompt = """Translate English to French:\nInput: Hello -> Bonjour\nInput: Goodbye -> Au revoir\nInput: Thank you ->"""`,
              codeLanguage: 'text',
              quiz: quiz('Prompting Types Quiz', [
                mcq('What defines a Few-Shot prompt?', 'Including reference input/output examples inside the prompt context', ['Running 100 queries', 'Fine-tuning weights'], 'Few-shot prompts guide LLMs with explicit examples.'),
              ]),
            }),
            lesson('Chain-of-Thought (CoT) & Reasoning Prompts', 'chain-of-thought', `# Chain-of-Thought\n\nInstruct LLMs to "Think step-by-step" before producing final answers to improve complex reasoning accuracy.`, {
              starterCode: `prompt = """Solve this math puzzle step-by-step:\nQ: A store has 15 apples. It sells 6 and receives 10 more. How many apples are there?\nLet's think step-by-step:"""`,
              solutionCode: `prompt = """Solve this math puzzle step-by-step:"""`,
              codeLanguage: 'text',
              quiz: quiz('CoT Quiz', [
                trueFalse('Chain-of-Thought prompting drastically reduces logical math and reasoning hallucinations.', true),
              ]),
            }),
            lesson('System Prompts & Persona Instruction', 'system-prompts', `# System Prompts\n\nDefine high-level behavioral boundaries, tone, role persona, and output constraints.`, {
              starterCode: `system_prompt = """You are Code Mentor AI, an expert programming tutor. \nRules:\n1. Always respond in Markdown\n2. Provide concise explanations followed by executable code snippets."""`,
              solutionCode: `system_prompt = """You are Code Mentor AI..."""`,
              codeLanguage: 'text',
              quiz: quiz('System Prompts Quiz', [
                mcq('What role does a System Prompt play?', 'Establishes persistent persona, instructions, and output formatting rules', ['Saves token cost', 'Deletes history'], 'System prompts set persistent behavioral rules.'),
              ]),
            }),
            lesson('Structuring JSON & XML Output from LLMs', 'structured-llm-output', `# Structured Outputs\n\nForce LLMs to return strict JSON or XML formats for program parsing.`, {
              starterCode: `prompt = """Extract entity info from text and return ONLY valid JSON matching this schema:\n{"name": string, "age": number}\n\nText: John is 28 years old."""`,
              solutionCode: `prompt = """Extract entity info..."""`,
              codeLanguage: 'text',
              quiz: quiz('Structured Output Quiz', [
                trueFalse('Prompting LLMs with strict JSON schemas allows direct programmatic parsing of API responses.', true),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: RAG (Retrieval-Augmented Generation)',
          lessons: [
            lesson('Understanding RAG Architecture', 'rag-architecture', `# RAG Architecture\n\nCombine vector search retrieval with generative LLMs to answer questions on custom private documents.`, {
              starterCode: `# RAG Flow: Query -> Vector Embedding -> Vector DB Search -> Top-K Passages -> Augmented LLM Prompt -> Answer`,
              solutionCode: `# RAG Flow`,
              codeLanguage: 'text',
              quiz: quiz('RAG Architecture Quiz', [
                mcq('Why build a RAG pipeline instead of fine-tuning an LLM on private docs?', 'RAG enables instant knowledge updates and cites exact source passages without retraining', ['RAG requires GPU', 'RAG costs zero tokens'], 'RAG updates knowledge instantly without costly model retraining.'),
              ]),
            }),
            lesson('Vector Embeddings & Vector Databases (Chroma, Pinecone)', 'vector-embeddings-db', `# Vector DBs\n\nConvert text chunks into dense floating-point vector embeddings and query cosine similarity in vector databases.`, {
              starterCode: `from sentence_transformers import SentenceTransformer\nmodel = SentenceTransformer('all-MiniLM-L6-v2')\nembeddings = model.encode(["Code Mentor is an interactive AI learning app"])\nprint("Embedding vector shape:", embeddings.shape)`,
              solutionCode: `from sentence_transformers import SentenceTransformer\nmodel = SentenceTransformer('all-MiniLM-L6-v2')\nembeddings = model.encode(["Code Mentor is an interactive AI learning app"])\nprint("Embedding vector shape:", embeddings.shape)`,
              codeLanguage: 'python',
              quiz: quiz('Vector DB Quiz', [
                mcq('What mathematical similarity metric is widely used to compare document embeddings?', 'Cosine Similarity', ['Euclidean Addition', 'Manhattan Matrix'], 'Cosine similarity measures angle between vector embeddings.'),
              ]),
            }),
            lesson('Document Chunking & Text Splitting Strategies', 'text-chunking-strategies', `# Text Chunking\n\nSplit large PDFs/docs into overlapping chunks (e.g. 500 characters with 50 character overlap) to preserve context.`, {
              starterCode: `from langchain.text_splitter import RecursiveCharacterTextSplitter\nsplitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)\nchunks = splitter.split_text("Long document text...")`,
              solutionCode: `from langchain.text_splitter import RecursiveCharacterTextSplitter`,
              codeLanguage: 'python',
              quiz: quiz('Chunking Quiz', [
                trueFalse('Chunk overlap prevents losing context when key sentences cross split chunk boundaries.', true),
              ]),
            }),
            lesson('Building RAG with LangChain & LlamaIndex', 'langchain-rag', `# LangChain RAG\n\nChain Document Loader -> Text Splitter -> VectorStore -> RetrievalQA Chain.`, {
              starterCode: `from langchain.chains import RetrievalQA\n# retrieval_chain = RetrievalQA.from_chain_type(llm, retriever=vectorstore.as_retriever())`,
              solutionCode: `# retrieval_chain = RetrievalQA.from_chain_type(llm, retriever=vectorstore.as_retriever())`,
              codeLanguage: 'python',
              quiz: quiz('LangChain RAG Quiz', [
                mcq('Which framework provides high-level abstractions for building RAG pipelines and chains?', 'LangChain / LlamaIndex', ['PyTorch', 'Django'], 'LangChain and LlamaIndex specialize in RAG pipelines.'),
              ]),
            }),
            lesson('Evaluating RAG Hallucinations & Faithfulness', 'rag-evaluation', `# RAG Evaluation\n\nEvaluate RAG pipelines on Context Precision, Context Recall, and Answer Faithfulness using Ragas.`, {
              starterCode: `# Metrics: 1. Faithfulness (Is answer grounded in retrieved docs?) 2. Answer Relevance`,
              solutionCode: `# Metrics: 1. Faithfulness 2. Answer Relevance`,
              codeLanguage: 'text',
              quiz: quiz('RAG Eval Quiz', [
                trueFalse('Faithfulness measures whether the LLM answer is strictly derived from retrieved context passages.', true),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Autonomous AI Agents & Production LLMs',
          lessons: [
            lesson('Autonomous AI Agents & Tool Calling (Function Calling)', 'ai-agents-tool-calling', `# Function Calling\n\nProvide LLMs with structured tool declarations (e.g. \`calculateRoute\`, \`runCommand\`) so the model can invoke external APIs.`, {
              starterCode: `tools = [{\n  "name": "search_web",\n  "description": "Searches Google for query",\n  "parameters": { "type": "object", "properties": { "query": { "type": "string" } } }\n}]`,
              solutionCode: `tools = [{ "name": "search_web" }]`,
              codeLanguage: 'json',
              quiz: quiz('Tool Calling Quiz', [
                mcq('How do AI agents execute real-world actions like running code or searching the web?', 'Function / Tool Calling schema declarations', ['By guessing responses', 'By compiling C++'], 'Tool calling declarations enable agents to interact with external tools.'),
              ]),
            }),
            lesson('ReAct Pattern (Reasoning + Acting Loops)', 'react-agent-pattern', `# ReAct Pattern\n\nLoop: Thought -> Action -> Observation -> Thought -> Final Answer.`, {
              starterCode: `# ReAct Loop Example:\n# Thought: I need to check the weather in Paris.\n# Action: get_weather(location="Paris")\n# Observation: 22°C Sunny\n# Thought: Now I can answer the user.`,
              solutionCode: `# ReAct Loop Example`,
              codeLanguage: 'text',
              quiz: quiz('ReAct Pattern Quiz', [
                mcq('What does the ReAct agent loop stand for?', 'Reasoning and Acting', ['Reactive Actions', 'React JS Library'], 'ReAct stands for Reasoning and Acting.'),
              ]),
            }),
            lesson('Preventing Prompt Injection & Guardrails', 'prompt-injection-guardrails', `# Guardrails\n\nProtect applications against indirect prompt injection and jailbreaking using input sanitizers and NeMo Guardrails.`, {
              starterCode: `// Untrusted User Input -> Guardrail Checker -> System Prompt -> LLM`,
              solutionCode: `// Untrusted User Input -> Guardrail Checker -> System Prompt -> LLM`,
              codeLanguage: 'text',
              quiz: quiz('Prompt Injection Quiz', [
                trueFalse('Prompt Injection occurs when untrusted user input overrides the developer\'s system instructions.', true),
              ]),
            }),
            lesson('LLM Cost Optimization & Caching', 'llm-cost-optimization', `# Optimization\n\nReduce API costs using Semantic Cache (Redis) and prompt compression techniques.`, {
              starterCode: `// Check semantic cache before sending request to Claude/GPT API`,
              solutionCode: `// Check semantic cache before sending request to Claude/GPT API`,
              codeLanguage: 'text',
              quiz: quiz('LLM Cost Quiz', [
                mcq('How can semantic caching reduce LLM API billing costs?', 'Returns cached responses for semantically similar user prompts without querying API', ['Deletes tokens', 'Increases model size'], 'Semantic caching reuses responses for similar intent prompts.'),
              ]),
            }),
            lesson('AI Masterclass Capstone: Autonomous Pair-Programming Agent', 'ai-capstone-agent', `# AI Agent Capstone\n\nBuild an autonomous pair-programming agent with tool calling, RAG documentation retrieval, and self-correction loops.`, {
              starterCode: `print("=== AUTONOMOUS AI PAIR-PROGRAMMING AGENT DEPLOYED ===")`,
              solutionCode: `print("=== AUTONOMOUS AI PAIR-PROGRAMMING AGENT DEPLOYED ===")`,
              codeLanguage: 'python',
              quiz: quiz('AI Capstone Quiz', [
                mcq('What empowers agentic AI assistants like Code Mentor to solve complex software engineering tasks?', 'Iterative Tool Calling + Reasoning Loops + RAG Context + Human Synergy', ['Simple regex strings', 'Manual copy-pasting'], 'Agentic AI combines reasoning, tool execution, and context.'),
              ]),
            }),
          ]
        }
      ]
    }
  ]
};
