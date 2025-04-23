// Este é um modelo de site em C++ para fins didáticos, simulando uma aplicação backend que serviria um portfólio
// Em um cenário real, um site seria implementado com HTML/CSS/JS, mas podemos usar C++ para simular lógica ou servidor

#include <iostream>
#include <string>
#include <vector>

struct Projeto {
    std::string nome;
    std::string descricao;
    std::string link;
};

void exibirPerfil() {
    std::cout << "Raphael Nascimento\n";
    std::cout << "Estudante de Ciência da Computação | Foco em Desenvolvimento e Lógica | Buscando Estágio em TI\n";
    std::cout << "GitHub: https://github.com/seuusuario\n";
    std::cout << "LinkedIn: https://linkedin.com/in/seulinkedin\n";
    std::cout << "Currículo (PDF): /curriculo-raphael.pdf\n";
    std::cout << "\n";
}

void exibirProjetos(const std::vector<Projeto>& projetos) {
    std::cout << "Projetos em Destaque:\n";
    for (const auto& projeto : projetos) {
        std::cout << "- " << projeto.nome << ": " << projeto.descricao << " (" << projeto.link << ")\n";
    }
}

int main() {
    exibirPerfil();

    std::vector<Projeto> projetos = {
        {"Comparador de Cartas (Super Trunfo)", "Projeto em C para lógica e estrutura de dados", "https://github.com/seuusuario/nome-do-projeto"}
        // Adicione mais projetos aqui
    };

    exibirProjetos(projetos);

    return 0;
}
