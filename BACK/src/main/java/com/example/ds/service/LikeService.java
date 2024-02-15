package com.example.ds.service;

import com.example.ds.dto.LikeDTO;
import com.example.ds.repository.LikeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LikeService {
    private final LikeRepository likeRepository;

    public int save(LikeDTO likeDTO) {
        return likeRepository.save(likeDTO);
    }

    public void delete(int userId, int boardId) {
        likeRepository.delete(userId, boardId);
        System.out.println(userId);
        System.out.println(0);
    }

    public List<LikeDTO> findByUserId(int id) {
        return likeRepository.findByUserId(id);
    }

    public int findByBoardId(int id) {
        return likeRepository.findByBoardId(id);
    }
}
