document.addEventListener('DOMContentLoaded', function(){
  
  const form = document.getElementById('forms-ferias');
  if(form){
    form.addEventListener('submit', function(event){
      event.preventDefault();
  
      const colaborador = document.getElementById('colaborador-name').value;
      const startDate = document.getElementById('start-date').value;
      const endDate = document.getElementById('end-date').value;
      const message = document.getElementById('message').value;
  
      const solicitacao = {
        colaborador: colaborador,
        startDate: startDate,
        endDate: endDate,
        message: message
      }
  
      let solicitacoes = JSON.parse(localStorage.getItem('solicitacoes')) || [];
      solicitacoes.push(solicitacao);
  
      localStorage.setItem('solicitacoes', JSON.stringify(solicitacoes))
  
     form.reset();
  
      alert("Solicitação enviada com sucesso!")
    });
    
  }
  
  const solicitacoes = JSON.parse(localStorage.getItem('solicitacoes')) || [];

  const listaProgramacoes = document.querySelector('.programacoes')

  if(listaProgramacoes){
    solicitacoes.forEach(solicitacao => {
      const divProgramacoes = document.createElement('div');
      divProgramacoes.className = 'programacao-colaborador'
  
      const divColaborador = document.createElement('div')
      divColaborador.textContent = `Colaborador: ${solicitacao.colaborador}`;
      divProgramacoes.appendChild(divColaborador)
  
      const divStartDate = document.createElement('div')
      divStartDate.textContent = `Data Início: ${solicitacao.startDate}`;
      divProgramacoes.appendChild(divStartDate)
  
      const divEndDate = document.createElement('div')
      divEndDate.textContent = `Data Final: ${solicitacao.endDate}`;
      divProgramacoes.appendChild(divEndDate)
  
  
      listaProgramacoes.appendChild(divProgramacoes);
    });
  }
})