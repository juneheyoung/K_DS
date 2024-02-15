package com.example.ds.controller;
import com.example.ds.dto.BoardDTO;
import com.example.ds.dto.LikeDTO;
import com.example.ds.service.LikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/like")
@CrossOrigin(origins = "http://localhost:3000")
public class LikeController {
    private final LikeService likeService;

    @PostMapping("/save")
    public ResponseEntity<LikeDTO> save(@RequestBody LikeDTO likeDTO){
        int saveResult = likeService.save(likeDTO); // 게시글 저장 요청 처리
        if (saveResult > 0) {
            return ResponseEntity.ok(likeDTO); // 게시글 저장 성공 시 목록 페이지로 리다이렉트
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // 게시글 저장 실패 시 다시 "save" 페이지로 이동
        }
    }
    @GetMapping("/delete")
    public void delete(@RequestParam("userId") int userId, @RequestParam("boardId") int boardId){
        likeService.delete(userId, boardId);
//        System.out.println(userId);
//        System.out.println(boardId);
    }
    // 해당 유저의 추천 글 조회
    @GetMapping("/countuser")
    public ResponseEntity<List<LikeDTO>> findByUserId(@RequestParam int id){
        List<LikeDTO> likeDTOList = likeService.findByUserId(id);
        return ResponseEntity.ok(likeDTOList);

    }
    // 총 추천수
    @GetMapping("/countlike")
    public int findByBoardId(@RequestParam int id){
        return likeService.findByBoardId(id);
    }
}

