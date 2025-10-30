import java.time.LocalDateTime;

public class Task {
    private String titulo;
    private String descricao; 
    private LocalDateTime dataDeCriacao;
    private LocalDateTime dataDeTermino;

    public Task(String titulo, String descricao, LocalDateTime dataDeCriacao){
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataDeCriacao = dataDeCriacao;
    }

    public Task(String titulo, String descricao, LocalDateTime dataDeCriacao, LocalDateTime dataDeTermino){
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataDeCriacao = dataDeCriacao;
        this.dataDeTermino = dataDeTermino;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public LocalDateTime getDataDeCriacao() {
        return dataDeCriacao;
    }

    public void setDataDeCriacao(LocalDateTime dataDeCriacao) {
        this.dataDeCriacao = dataDeCriacao;
    }

    public LocalDateTime getDataDeTermino() {
        return dataDeTermino;
    }

    public void setDataDeTermino(LocalDateTime dataDeTermino) {
        this.dataDeTermino = dataDeTermino;
    }

    
} 