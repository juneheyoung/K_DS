package com.example.ds.service;

import com.example.ds.dto.BoardDTO;
import com.example.ds.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository; // boardservice 의존성 주입

    public int save(BoardDTO boardDTO){
//        System.out.println("service" + boardDTO);
        return boardRepository.save(boardDTO); //게시글 저장 요청을 BoardRepository에 위임
    }

    public List<BoardDTO> findAll() {
        return boardRepository.findAll();
    }

    public void updateHits(int id) {
        boardRepository.updateHits(id);

    }

    public BoardDTO findById(int boardId) {
        return boardRepository.findById(boardId);
    }

    public void delete(int id) {
        boardRepository.delete(id);
    }

    public void update(BoardDTO boardDTO) {
        boardRepository.update(boardDTO);
    }
}
