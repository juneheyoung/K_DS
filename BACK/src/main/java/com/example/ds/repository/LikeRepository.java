package com.example.ds.repository;

import com.example.ds.dto.LikeDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class LikeRepository {
    private final SqlSessionTemplate sql;

    public int save(LikeDTO likeDTO) {
        return sql.insert("Like.save", likeDTO);
    }

    public void delete(int userId, int boardId) {
        Map<String, Integer> paramMap = new HashMap<>();
        paramMap.put("userId", userId);
        paramMap.put("boardId", boardId);

        try {
            sql.delete("Like.delete", paramMap);
            System.out.println("Delete successful!");
        } catch (Exception e) {
//            e.printStackTrace();
            System.out.println("Delete failed!");
        }
    }


    public List<LikeDTO> findByUserId(int id) {
        return sql.selectList("Like.findByUserId",id);
    }

    public int findByBoardId(int id) {
        System.out.println("id = " + id);
        return sql.selectOne("Like.findByBoardId",id);
//        return (int) Optional.ofNullable(sql.selectOne("Like.findByBoardId",id)).orElse(0);
    }
}
