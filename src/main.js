let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = "flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm";

   task.innerHTML = `
         <p class="text-gray-700 text-base">${title}</p>
         <div class="flex space-x-2">
            <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                   class="bg-green-300 text-black py-1 px-3 rounded-lg hover:bg-green-200 cursor-pointer">
            <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                   class="bg-red-300 text-black py-1 px-3 rounded-lg hover:bg-red-200 cursor-pointer">
         </div>
   `;

   output.appendChild(task); 
   input.value = ""; 
   e.preventDefault();
};
