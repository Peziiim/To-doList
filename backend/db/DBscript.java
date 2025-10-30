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
                                CREATE TABLE tasks(
                                    
                                )

                              """);
                 
            


        } catch (SQLException e) {
            System.out.println("Erro ao conectar no banco de dados" + e);
        }
    }
}