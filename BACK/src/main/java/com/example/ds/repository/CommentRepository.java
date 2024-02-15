package com.example.ds.repository;

import com.example.ds.dto.CommentDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class CommentRepository {
    private final SqlSessionTemplate sql;

    public void save(CommentDTO commentDTO) {
        sql.insert("Comment.save", commentDTO);
    }

    public List<CommentDTO> findAll(int id) {
        return sql.selectList("Comment.findAll", id);
    }

    public void deleteComment(int commentId) {
        sql.delete("Comment.deleteComment", commentId);
    }
}
