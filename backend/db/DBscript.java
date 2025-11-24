package backend.db;

import java.sql.Statement;
import java.net.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DBscript {
    private static final String URL = "jdbc:mysql://localhost:3306/todo";
    private static final String user = "root";
    private static final String senha = "";

    public static void main(String[] args){
        try{
            Connection conn = DriverManager.getConnection(URL, user, senha);
            Statement statement = conn.createStatement();
            statement.execute("""
                                CREATE TABLE users(
                                    id_user int primary key autoincrement,
                                    nome varchar(80) not null,
                                    email varchar(250) not null,
                                    senha varchar(80) not null
                                )

                              """);
                 
                 
            statement.execute("""
                                CREATE TABLE tasks(
                                    task_id int primary key autoincrement,
                                    title varchar(80) not null,
                                    desc varchar(250) not null,
                                    data_criacao DATETIME not null
                                    id_user foreign key references()
                                )

                              """);

            


        } catch (SQLException e) {
            System.out.println("Erro ao conectar no banco de dados" + e);
        }
    }
}