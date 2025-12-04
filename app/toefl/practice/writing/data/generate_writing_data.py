import json
import random
import os

base_path = '/home/batzorig/Desktop/projects/crystal-castles/app/ielts/practice/writing/data'
source_file = os.path.join(base_path, '1.json')

with open(source_file, 'r') as f:
    data = json.load(f)

for i in range(2, 21):
    new_data = data.copy()
    new_data['id'] = f"writing-{i}"
    new_data['title'] = f"IELTS Academic Writing Practice Test {i}"
    new_data['complete'] = random.choice([True, False])
    
    # Update task IDs as well to be unique per file
    new_tasks = []
    for task in data['tasks']:
        new_task = task.copy()
        # Assuming task id format is task-1, task-2. We might want to make them unique globally or just per file.
        # Keeping them simple as task-1, task-2 per file is probably fine, but let's check if they need to be unique.
        # The file ID is unique, so task IDs within the file are scoped. 
        # But to be safe and clear, let's keep them as is or maybe append file index?
        # The original file has "id": "task-1". 
        # Let's just keep them as is for now, as they are likely scoped by the parent test object in the app.
        new_tasks.append(new_task)
    
    new_data['tasks'] = new_tasks

    target_file = os.path.join(base_path, f'{i}.json')
    with open(target_file, 'w') as f:
        json.dump(new_data, f, indent=4)

print("Generated 19 writing data files.")
