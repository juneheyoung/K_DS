package com.example.ds.service;

import com.example.ds.dto.CommentDTO;
import com.example.ds.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;

    public void save(CommentDTO commentDTO) {
        commentRepository.save(commentDTO);
    }

    public List<CommentDTO> findAll(Long boardId) {
        return commentRepository.findAll(boardId);
    }

    public void deleteComment(int commentId){
        commentRepository.deleteComment(commentId);
    }
}
