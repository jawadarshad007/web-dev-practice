import tkinter as tk
from tkinter import messagebox

# Function that runs when button is clicked
def submit_data():
    name = name_entry.get()
    age = age_entry.get()
    email = email_entry.get()

    if name == "" or age == "" or email == "":
        messagebox.showwarning("Warning", "Please fill all fields!")
    else:
        result_label.config(
            text=f"Name: {name}\nAge: {age}\nEmail: {email}"
        )
        clear_fields()

def clear_fields():
    name_entry.delete(0, tk.END)
    age_entry.delete(0, tk.END)
    email_entry.delete(0, tk.END)

# Main window
root = tk.Tk()
root.title("Student Registration Form")
root.geometry("400x350")
root.config(bg="#2c3e50")

# Heading
heading = tk.Label(root, text="Student Registration",
                   font=("Arial", 18, "bold"),
                   bg="#2c3e50", fg="white")
heading.pack(pady=15)

# Name
name_label = tk.Label(root, text="Name", bg="#2c3e50", fg="white")
name_label.pack()
name_entry = tk.Entry(root, width=30)
name_entry.pack(pady=5)

# Age
age_label = tk.Label(root, text="Age", bg="#2c3e50", fg="white")
age_label.pack()
age_entry = tk.Entry(root, width=30)
age_entry.pack(pady=5)

# Email
email_label = tk.Label(root, text="Email", bg="#2c3e50", fg="white")
email_label.pack()
email_entry = tk.Entry(root, width=30)
email_entry.pack(pady=5)

# Submit Button
submit_btn = tk.Button(root, text="Submit",
                       bg="#27ae60", fg="white",
                       width=15, command=submit_data)
submit_btn.pack(pady=15)

# Result Label
result_label = tk.Label(root, text="",
                        bg="#2c3e50", fg="white",
                        font=("Arial", 12))
result_label.pack(pady=10)

# Run the window
root.mainloop()