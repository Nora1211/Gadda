import json
import pandas as pd
import re
from nltk.corpus import stopwords

# Download the NLTK stop words dataset for Italian
import nltk
nltk.download('stopwords')
stop_words = set(stopwords.words('italian'))

# Read the JSON file
with open('Postille.json', 'r') as file:
    data = json.load(file)

# Create a DataFrame from the JSON data
df = pd.DataFrame(data)

# Convert 'Postilla parlata' column to strings and then join
postilla_text = ' '.join(df['Postilla parlata'].astype(str).dropna())

# Remove non-alphanumeric characters and split the text into words
words = pd.Series(re.sub(r'[^\w\s]', '', postilla_text).split())

# Filter out numeric values and stop words
words = words[~words.str.isnumeric() & ~words.isin(stop_words)]

# Count the occurrences of each word
word_counts = words.value_counts()

# Get the top 10 recurring words
top_words = word_counts.head(10)

print("Top 10 recurring words in 'Postilla parlata' (excluding stop words and integers):")
print(top_words)
