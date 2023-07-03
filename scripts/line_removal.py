# Example Usage
# - Remove lines with `lang: en` in posts: 
#       python scripts/line_removal.py './content/english/posts' 'lang: en'

import os
import sys

def remove_line_with_content(directory, content):
    for filename in os.listdir(directory):
        filepath = os.path.join(directory, filename)
        if os.path.isfile(filepath):
            with open(filepath, 'r') as file:
                lines = file.readlines()

            with open(filepath, 'w') as file:
                for line in lines:
                    if line.strip() != content:
                        file.write(line)

    print("Lines with the content '{}' have been removed.".format(content))


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python program.py <directory_path> <content_to_remove>")
        sys.exit(1)

    directory_path = sys.argv[1]
    content_to_remove = sys.argv[2]

    remove_line_with_content(directory_path, content_to_remove)