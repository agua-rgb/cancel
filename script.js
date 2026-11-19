(() => {
  const subscriptionView=document.getElementById('subscriptionView');
  const cancelView=document.getElementById('cancelView');
  const doneView=document.getElementById('doneView');
  const step1=document.getElementById('step1');
  const step2=document.getElementById('step2');
  const step3=document.getElementById('step3');
  const steps=[...document.querySelectorAll('.step')];
  const pathResult=document.getElementById('pathResult');

  function showMain(view){
    subscriptionView.hidden=view!=='subscription';
    cancelView.hidden=view!=='cancel';
    doneView.hidden=view!=='done';
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function showStep(n){
    step1.hidden=n!==1;
    step2.hidden=n!==2;
    step3.hidden=n!==3;
    steps.forEach((s,i)=>s.classList.toggle('active',i<n));
  }

  document.getElementById('cancelSubscriptionBtn').addEventListener('click',()=>{showMain('cancel');showStep(1);});
  document.getElementById('backBtn').addEventListener('click',()=>showMain('subscription'));
  document.getElementById('continueCancelBtn').addEventListener('click',()=>showStep(2));
  document.getElementById('sentBtn').addEventListener('click',()=>{
    pathResult.textContent='Cancellation path recorded: promotional message marked as sent.';
    showStep(3);
  });
  document.getElementById('skipBtn').addEventListener('click',()=>{
    pathResult.textContent='Cancellation path recorded: promotional message skipped.';
    showStep(3);
  });
  document.getElementById('finishBtn').addEventListener('click',()=>showMain('done'));
})();
