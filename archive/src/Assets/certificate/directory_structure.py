import os

def print_directory_structure(folder_path, indent=''):
    """
    Print the directory structure of the specified folder.
    """
    for item in os.listdir(folder_path):
        item_path = os.path.join(folder_path, item)
        if os.path.isdir(item_path):
            print(indent + f'📁 {item}')
            print_directory_structure(item_path, indent + '    ')
        else:
            print(indent + f'📄 {item}')

# Get the current directory
current_directory = os.getcwd()

# Call the function with the current directory
print_directory_structure(current_directory)