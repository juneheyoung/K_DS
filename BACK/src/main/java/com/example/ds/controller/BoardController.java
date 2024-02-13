package com.example.ds.controller;

import com.example.ds.dto.BoardDTO;
import com.example.ds.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/board")
@CrossOrigin(origins = "http://localhost:3000")
public class BoardController {
    private final BoardService boardService; // 의존성 주입
    //게시글 작성

    @PostMapping("/save") // HTTP POST 요청에 대한 처리를 위한 매핑
    public ResponseEntity<BoardDTO> save(@RequestBody BoardDTO boardDTO) {
//        System.out.println(boardDTO);
        int saveResult = boardService.save(boardDTO); // 게시글 저장 요청 처리
        if (saveResult > 0) {
            return ResponseEntity.ok(boardDTO); // 게시글 저장 성공 시 목록 페이지로 리다이렉트
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // 게시글 저장 실패 시 다시 "save" 페이지로 이동
        }
    }
    //게시글 전체
    @GetMapping("/")
    public ResponseEntity<List<BoardDTO>> findAll() {
        List<BoardDTO> boardDTOList = boardService.findAll();
        return ResponseEntity.ok(boardDTOList);
    }

    //게시글 조회(detail)
    @GetMapping
    public ResponseEntity<BoardDTO> findById (@RequestParam("id") int id) {
        boardService.updateHits(id);
        BoardDTO boardDTO = boardService.findById(id);
        return ResponseEntity.ok(boardDTO);
    }

    // 게시글 삭제
    @GetMapping("/delete")
    public void delete(@RequestParam("id") int id){
        boardService.delete(id);
    }

    //게시글 수정
    @PostMapping("/update")
    public ResponseEntity<BoardDTO> update(@RequestBody BoardDTO boardDTO) {
        boardService.update(boardDTO);

//        BoardDTO dto = boardService.findById(boardDTO.getBoardId());
        return ResponseEntity.ok(boardDTO);

    }
}

