function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Tambahkan event klik untuk menandai selesai
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Tambahkan tombol hapus
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";
  deleteBtn.onclick = () => li.remove();
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
