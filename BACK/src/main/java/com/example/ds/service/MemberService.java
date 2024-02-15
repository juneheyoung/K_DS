package com.example.ds.service;

import com.example.ds.dto.BoardDTO;
import com.example.ds.dto.MemberDTO;
import com.example.ds.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.lang.reflect.Member;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
        private final MemberRepository memberRepository; // 의존성 주입
    public MemberDTO login(String userEmail, String userPass) {
        return memberRepository.login(userEmail,userPass);
    }

    ///  -------------------------------------------
//    public void update(MemberDTO memberDTO) {
//        memberRepository.update(memberDTO);
//    }

    public MemberDTO findById(int userId) {
        return memberRepository.findById(userId);
    }

    public boolean updateMemberInfo(MemberDTO memberDTO) {
        // 1. 기존 정보 조회
        MemberDTO existingMember = memberRepository.findById(memberDTO.getUserId());  // 함
        System.out.println( "존재멤버 dto" + existingMember);
        if (existingMember != null) {
            // 2. 중복 확인
            if (existingMember.getUserEmail().equals(memberDTO.getUserEmail())) {
                // 수정하려는 아이디(email)가 기존과 다르면 중복 확인
                if (memberRepository.existsById(memberDTO.getUserEmail())) {
                    // 중복된 아이디가 이미 존재함
                    return false;
                }
                return false;
            }

            if (existingMember.getUserName().equals(memberDTO.getUserName())) {
                // 수정하려는 닉네임이 기존과 다르면 중복 확인
                if (memberRepository.existsByNickname(memberDTO.getUserName())) {
                    // 중복된 닉네임이 이미 존재함
                    return false;
                }
                return false;
            }

            // 3. 수정
            memberRepository.updateMemberInfo(memberDTO);
            return true;
        }

        return false; // 기존 정보가 없음
    }
    }

//    public ResponseEntity<?> updateUser(String userEmail, MemberDTO updatedUser) {
//
//        if (isEmailDuplicated(updatedUser.getUserEmail(), userEmail)) {
//            return ResponseEntity.status(HttpStatus.CONFLICT).body("이메일 중복");
//        }
//        if (isNameDuplicated(updatedUser.getUserName(),userEmail)){
//            return ResponseEntity.status(HttpStatus.CONFLICT).body("닉네임 중복");
//        }
//        Optional<MemberDTO> existingUserOptional = memberRepository.findByEmail(userEmail);
//        if (existingUserOptional.isPresent()){
//            MemberDTO existingUser = existingUserOptional.get();
//            updatedUser.setUserEmail(existingUser.getUserEmail());
//            memberRepository.updateUser(updatedUser);
//            return ResponseEntity.ok(updatedUser);
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("해당 유저없음");
//        }
//        }
//        private boolean isEmailDuplicated(String userEmail, String currentUserEmail) {
//            Optional<MemberDTO> existingUserOptional = memberRepository.findByEmail(userEmail);
//            return existingUserOptional.isPresent() && !existingUserOptional.get().getUserEmail().equals(currentUserEmail);
//        }
//
//        private boolean isNameDuplicated(String userName, String currentUserEmail) {
//            Optional<MemberDTO> existingUserOptional = memberRepository.findByName(userName);
//            return existingUserOptional.isPresent() && !existingUserOptional.get().getUserEmail().equals(currentUserEmail);
//        }

//    }


