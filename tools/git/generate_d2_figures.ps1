echo "Generating figures"

d2 --sketch --layout=dagre --pad 10 .\git_collaboration_sequence.d2 .\git_collaboration_sequence.png
d2 --sketch --layout=dagre --pad 10 .\git_components.d2 .\git_components.png
d2 --sketch --layout=elk --pad 10 .\git_file_states.d2 .\git_file_states.png
d2 --sketch --layout=dagre --pad 10 .\git_shared_repo.d2 .\git_shared_repo.png
d2 --sketch --layout=dagre --pad 10 .\git_workflow.d2 .\git_workflow.png
