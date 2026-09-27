document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("loanForm").addEventListener("submit",e=>{
 e.preventDefault();
 const n=document.getElementById("formNote");
 n.textContent="Application details captured for this demo. Connect this form to the Salary King API/Supabase workflow for live submission.";
 n.style.color="#0a5a47";
});

document.getElementById("googleLogin")?.addEventListener("click",()=>{
  alert("Google Login demo — production Google OAuth will be connected here.");
});
