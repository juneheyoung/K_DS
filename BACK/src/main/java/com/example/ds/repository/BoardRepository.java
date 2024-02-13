package com.example.ds.repository;


import com.example.ds.dto.BoardDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class BoardRepository {
    private final SqlSessionTemplate sql; // SqlsesstionTemplate 의존성 주입
    public int save(BoardDTO boardDTO) {

        return sql.insert("Board.save", boardDTO);//게시글 저장 쿼리 실행
    }

    public List<BoardDTO> findAll() {
        return sql.selectList("Board.findAll");
    }

    public BoardDTO findById(int id) {
        return sql.selectOne("Board.findById",id);
    }

    public void updateHits(int id) {
        sql.update("Board.updateHits",id);
    }

    public void delete(int id) {
        sql.delete("Board.delete",id);
    }

    public void update(BoardDTO boardDTO) {
        sql.update("Board.update",boardDTO);
    }
}


