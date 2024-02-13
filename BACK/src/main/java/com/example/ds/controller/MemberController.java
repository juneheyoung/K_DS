package com.example.ds.controller;

import com.example.ds.dto.BoardDTO;
import com.example.ds.dto.MemberDTO;
import com.example.ds.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Member;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/member")
public class MemberController {
    private final MemberService memberService; // MemberService 의존성 주입
    // 로그인
    @PostMapping("/login")
    public ResponseEntity<MemberDTO> login(@RequestParam("userEmail") String userEmail, @RequestParam("userPass") String userPass) {
        MemberDTO memberDTO = memberService.login(userEmail,userPass);

        if (memberDTO != null ) {
            return ResponseEntity.ok(memberDTO); // 게시글 저장 성공 시 목록 페이지로 리다이렉트
        } else {
            System.out.println("에러");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // 게시글 저장 실패 시 다시 "save" 페이지로 이동
        }
    }

    // 회원정보 수정
    @PostMapping("/update")
    public ResponseEntity<MemberDTO> update(MemberDTO memberDTO) {
        memberService.update(memberDTO);
        MemberDTO dto = memberService.findById(memberDTO.getUserId());
        return ResponseEntity.ok(dto);
    }
//        ResponseEntity<?> response = memberService.updateUser(userEmail, updatedUser);
//
//        return response ;
//    }
//--------------------------
//    public ResponseEntity<BoardDTO> findById (@RequestParam("id") int id) {
//        boardService.updateHits(id);
//        BoardDTO boardDTO = boardService.findById(id);
//        return ResponseEntity.ok(boardDTO);
//    }

}


//        Authentication authentication = memberService.authenticate(memberDTO.getUsername(), memberDTO.getPassword());
//        if (authentication.isAuthenticated()) {
//            // You can generate a token or set the user as authenticated in the session
//            // For simplicity, here, we are just returning a success message
//            return ResponseEntity.ok("Login successful");
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
//        }
//    }


//    private final MemberMailService memberMailService;

//    @GetMapping("")
////    @Operation(description = "현재 로그인 중인 회원 정보를 조회")
//    public ResponseEntity<MemberResponseDTO> findCurrentLoginMember() throws NoSuchUsernameException {
//        return new ResponseEntity<>(MemberResponseDTO.toDTO(SecurityUtil.getCurrentLoginMember())
//                , HttpStatus.OK);
//    }
//
//    @PutMapping
//    public



