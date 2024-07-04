from modelos.mod_avaliacao import Avaliacao

class Restaurante:
    lista_restaurantes = []
    
    def __init__(self, nome, categoria):
        self._nome = nome.title()
        self._categoria = categoria.upper()
        self._status = False
        self._lista_avaliacoes = []
        Restaurante.lista_restaurantes.append(self)
        
    def __str__(self):
        return f'{self._nome} | {self._categoria}'
    
    @classmethod
    def listar(cls):
        print(f"{'Nome do restaurante'.ljust(25)} | {'Categoria'.ljust(25)} | {'Status'.center(6)} | {'Nota'.center(5)}")
        for res in cls.lista_restaurantes:
            print(f'{res._nome.ljust(25)} | {res._categoria.ljust(25)} | {res.status.center(6)} | {str(res.media_notas).center(6)}')
            
    @property
    def status(self):
        return '☑' if self._status else '☐'
    
    def mudar_status(self):
        self._status = not self._status
        
    def recebe_avaliacao(self, cliente, nota):
        if 0 <= nota <= 5:
            avaliacao = Avaliacao(cliente, nota)
            self._lista_avaliacoes.append(avaliacao)
    
    @property    
    def media_notas(self):
        if not self._lista_avaliacoes or self.status == False:
            return '⚠︎'
        soma_notas = sum(avaliacao._nota for avaliacao in self._lista_avaliacoes)
        qtd_avaliacoes = len(self._lista_avaliacoes)
        media = round(soma_notas/qtd_avaliacoes, 1)
        return media
        