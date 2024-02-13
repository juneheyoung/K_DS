package com.example.ds.controller;

import com.example.ds.dto.BoardDTO;
import com.example.ds.dto.CommentDTO;
import com.example.ds.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/comment")
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {
    private final CommentService commentService ;

    @PostMapping("/save")
    public ResponseEntity<CommentDTO> save(CommentDTO commentDTO){
        System.out.println("CommentDTO" + commentDTO);
        commentService.save(commentDTO);
    return ResponseEntity.ok(commentDTO);
    }
    @GetMapping("/")
    public ResponseEntity<List<CommentDTO>> findAll(CommentDTO commentDTO) {
        List<CommentDTO> commentDTOList = commentService.findAll((long) commentDTO.getBoardId());
        return ResponseEntity.ok(commentDTOList);

    }
//    @GetMapping("/delete")
//    public void delete(@RequestParam("boardId") int boardId){
//        commentService.delete(commentId);
//    }

}