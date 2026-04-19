// aiService.js
// ============================================
// AI SERVICE - NHẬN XÉT TỰ ĐỘNG
// ============================================

// ===== CONSTANTS & TEMPLATES =====
const COMMENT_TEMPLATES = {
  'T': [
    'Em luôn thành thạo {keyword}, thể hiện sự tập trung và hiểu biết sâu sắc.',
    'Em nắm vững {keyword}, hoàn thành xuất sắc tất cả bài tập.',
    'Em thực hiện {keyword} một cách chính xác và hiệu quả.',
    'Em thể hiện kỹ năng {keyword} ở mức độ xuất sắc.',
    'Em có khả năng {keyword} vượt trội, rất đáng khen ngợi.',
    'Em thành thạo trong {keyword}, đạt kết quả rất tốt.',
    'Em biểu hiện tài năng trong {keyword}, luôn hoàn thành tốt.',
    'Em làm chủ {keyword}, tỏ ra rất giỏi giang.',
    'Em phát huy tốt {keyword}, có kết quả vô cùng ấn tượng.',
    'Em thực hiện {keyword} với độ chính xác cao, rất xứng đáy được biểu dương.',
    'Em tiếp cận {keyword} một cách sáng tạo và linh hoạt.',
    'Em nỗ lực với {keyword} và đã đạt được thành tựu đáng kể.',
    'Em có thế mạnh rõ rệt ở {keyword}.',
    'Em thể hiện khả năng vượt trội với {keyword}.',
    'Em hoàn toàn làm chủ {keyword}, tỏ ra rất xuất sắc.'
  ],
  'H': [
    'Em hoàn thành tốt {keyword}, nắm vững kiến thức cơ bản. Hãy tiếp tục rèn luyện để nâng cao hơn.',
    'Em thực hiện được {keyword}, nhưng cần luyện tập thêm để thành thạo hơn.',
    'Em có những tiến bộ tích cực với {keyword}. Hãy tiếp tục phát huy và cải thiện.',
    'Em nắm được kiến thức {keyword}, nhưng cần tập luyện để kỹ năng được hoàn thiện.',
    'Em cố gắng với {keyword}, kết quả tạm ổn. Hãy chăm chỉ luyện tập thêm.',
    'Em thực hiện {keyword} được. Em chú ý tăng cường luyện tập thêm sẽ tốt hơn.',
    'Em đạt được {keyword} ở mức tốt. Hãy tiếp tục nỗ lực để nâng cao.',
    'Em tiếp thu {keyword} khá tốt, cần ôn tập thêm để vững chắc hơn.',
    'Em biểu hiện năng lực tốt với {keyword}, nhưng vẫn có chỗ cần cải thiện.',
    'Em thể hiện được khả năng {keyword} ở mức khá. Hãy luyện tập để xuất sắc hơn.',
    'Em làm tốt {keyword} nhưng cần có sự kiên trì để phát triển hơn.',
    'Em biểu hiện năng lực khá với {keyword}. Hãy tiếp tục rèn luyện.',
    'Em hoàn thành {keyword} một cách tương đối tốt. Cố gắng thêm sẽ đạt kết quả cao hơn.',
    'Em thực hiện {keyword} ở mức chấp nhận được, cần rèn luyện thêm.',
    'Em có sự cố gắng với {keyword}. Tiếp tục nỗ lực để phát triển toàn diện.'
  ],
  'Đ': [
    'Em hoàn thành tốt {keyword}, nắm vững kiến thức cơ bản. Hãy tiếp tục rèn luyện để nâng cao hơn.',
    'Em thực hiện được {keyword}, hãy cố gắng luyện tập thêm để thành thạo hơn.',
    'Em có những tiến bộ tích cực với {keyword}. Hãy tiếp tục phát huy và cải thiện.',
    'Em nắm được kiến thức {keyword}, nhưng cần tập luyện để kỹ năng được hoàn thiện.',
    'Em hoàn thành với {keyword}, kết quả tạm ổn. Hãy chăm chỉ luyện tập thêm.',
    'Em thực hiện {keyword} được. Em hãy chú ý luyện thêm sẽ tốt hơn.',
    'Em đạt được {keyword} ở mức cơ bản. Hãy tiếp tục nỗ lực để nâng cao.',
    'Em tiếp thu {keyword} được, nhưng cần ôn tập thêm để vững vàng hơn.',
    'Em hoàn thành được {keyword} ở mức chấp nhận. Hãy cố gắng để tiến bộ hơn.',
    'Em thực hiện {keyword} khá tốt. Tiếp tục luyện tập để nâng cao trình độ.',
    'Em biểu hiện năng lực với {keyword} ở mức cơ bản, cần rèn luyện thêm.',
    'Em đạt được {keyword}, nhưng còn có những điểm cần cải thiện.',
    'Em làm được {keyword} nhưng chưa thực sự thành thạo. Luyện thêm sẽ tốt hơn.',
    'Em thể hiện được khả năng {keyword} ở mức khiêm tốn. Hãy tiếp tục nỗ lực.',
    'Em hoàn thành được yêu cầu {keyword}. Hãy rèn luyện thêm để phát triển.'
  ],
  'C': [
    'Em có cố gắng trong {keyword}. Em cần luyện tập thêm để thực hiện tốt hơn.',
    'Em đã bước đầu làm quen với {keyword}. Cần tiếp tục rèn luyện để tiến bộ rõ hơn.',
    'Em có tinh thần học tập trong {keyword}. Nên dành thời gian ôn luyện thêm để cải thiện.',
    'Em đã có sự cố gắng với {keyword}. Cần chú ý luyện tập thường xuyên để nắm vững hơn.',
    'Em có tham gia học tập {keyword}. Hãy tiếp tục rèn luyện để đạt kết quả tốt hơn.',
    'Em bước đầu thực hiện được {keyword}. Cần ôn tập lại để nâng cao kỹ năng.',
    'Em có ý thức học {keyword}. Nên luyện tập thêm để tự tin hơn khi làm bài.',
    'Em có cố gắng trong giờ học {keyword}. Cần chú ý rèn luyện thêm để tiến bộ hơn.',
    'Em đã tham gia học tập {keyword}. Hãy dành thêm thời gian luyện tập để cải thiện.',
    'Em có sự nỗ lực với {keyword}. Cần tiếp tục ôn luyện để đạt kết quả tốt hơn.',
    'Em đã cố gắng thực hiện {keyword}. Nên rèn luyện thêm để hoàn thiện hơn.',
    'Em có tinh thần học {keyword}. Cần chú ý luyện tập thêm để đạt yêu cầu tốt hơn.',
    'Em đã có sự cố gắng trong {keyword}. Hãy mạnh dạn hỏi thêm và luyện tập nhiều hơn.',
    'Em bước đầu hiểu {keyword}. Cần kiên trì luyện tập để tiến bộ rõ hơn.',
    'Em có tham gia học {keyword}. Nên tìm cách luyện tập thêm để nâng cao kết quả.'
  ]
};

// ===== HELPERS =====
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const isValidComment = (comment) => {
  if (!comment || typeof comment !== 'string') return false;
  const cleaned = comment.replace(/\[.*?\]/g, '').trim();
  const wordCount = cleaned.split(/\s+/).length;
  return cleaned.length > 30 && 
         wordCount >= 8 && 
         wordCount <= 200 && 
         cleaned.toLowerCase().startsWith('em') &&
         !/^\d+$/.test(cleaned.substring(0, 10));
};

const isValidBatchResponse = (responseText) => {
  const lines = responseText.split('\n').filter(line => line.trim() && line.includes('|||'));
  return lines.length > 0 && lines.some(line => {
    const parts = line.split('|||');
    return parts.length >= 2 && isValidComment(parts[1]);
  });
};

const parsePromptKeywords = (prompt) => {
  if (!prompt || prompt.trim() === '') return [];
  const keywords = prompt.split(/[|,]/).map(k => k.trim()).filter(k => k);
  return keywords;
};

const generateUniqueComment = (level, keyword, usedComments) => {
  if (!usedComments[level]) {
    usedComments[level] = [];
  }

  const templates = COMMENT_TEMPLATES[level] || COMMENT_TEMPLATES['C'];
  const availableTemplates = templates.filter(t => !usedComments[level].includes(t));
  
  if (availableTemplates.length === 0) {
    usedComments[level] = [];
    return templates[Math.floor(Math.random() * templates.length)].replace('{keyword}', keyword);
  }
  
  const selectedTemplate = availableTemplates[Math.floor(Math.random() * availableTemplates.length)];
  usedComments[level].push(selectedTemplate);
  
  return selectedTemplate.replace('{keyword}', keyword);
};

// ===== MAIN AI FUNCTION =====
const runAIGeneration = async (config) => {
  const {
    allTargets,
    students,
    studentData,
    draftData,
    viewMode,
    systemMode,
    selectedYearId,
    selectedSubId,
    selectedCriteriaId,
    selectedMonthId,
    selectedClassId,
    subjects,
    aiPrompt,
    apiKey,
    QUALITY_CRITERIA,
    GENERAL_COMPETENCIES,
    SPECIFIC_COMPETENCIES,
    SUBJECT_TO_COMPETENCY_MAP,
    db,
    appId,
    showToast,
    setDraftData
  } = config;

  const competencySkillMap = {
    'quality': {
      'Yêu nước': 'tôn trọng quốc kỳ, hiểu biết về đất nước',
      'Nhân ái': 'giúp đỡ bạn, chia sẻ, quan tâm mọi người',
      'Chăm chỉ': 'hoàn thành bài tập, tham gia tích cực, không lười biếng',
      'Trung thực': 'nói thật, không gian lận, thừa nhận lỗi',
      'Trách nhiệm': 'hoàn thành nhiệm vụ, chịu trách nhiệm hành động'
    },
    'competency': {
      'Tự chủ & Tự học': 'tự tổ chức học tập, không cần nhắc nhở, tự giải quyết khó khăn',
      'Giao tiếp & Hợp tác': 'làm việc nhóm tốt, lắng nghe bạn, chia sẻ ý kiến',
      'Giải quyết vấn đề & Sáng tạo': 'tìm giải pháp mới, suy nghĩ sáng tạo, giải quyết tình huống'
    },
    'specific': {
      'Ngôn ngữ': 'đọc hiểu, viết mạch lạc, nói rõ ràng, chính tả chính xác',
      'Tính toán': 'thực hiện phép tính, giải bài toán, hiểu các khái niệm toán học',
      'Khoa học': 'quan sát hiện tượng, thí nghiệm, giải thích tự nhiên',
      'Công nghệ': 'sử dụng công cụ, thực hành kỹ thuật, tạo ra sản phẩm',
      'Tin học': 'sử dụng máy tính, gõ phím, tìm kiếm thông tin',
      'Thẩm mĩ': 'vẽ, tô màu, sáng tạo mĩ thuật, cảm nhận vẻ đẹp',
      'Thể chất': 'chạy, nhảy, thể dục, phối hợp vận động, sức khỏe'
    }
  };

  const getStudentInfo = (stu) => {
    const d = studentData[stu.id] || {};
    const draft = draftData[stu.id] || {};
    const note = draft.note !== undefined ? draft.note : (d.note || "");
    
    if (viewMode === 'subject') {
      const level = draft.level !== undefined ? draft.level : (d.level || "");
      return { type: 'subject', level, data: null, note };
    } 
    else if (systemMode === 'vnedu' && viewMode !== 'subject') {
      const level = draft.level !== undefined ? draft.level : (d.level || "");
      return { type: 'vnedu_single', level, data: null, note };
    } 
    else if (systemMode === 'smas' && viewMode !== 'subject') {
      const list = viewMode === 'quality' ? QUALITY_CRITERIA : (viewMode === 'competency' ? GENERAL_COMPETENCIES : SPECIFIC_COMPETENCIES);
      const skillMap = competencySkillMap[viewMode] || {};
      
      const items = [];
      list.forEach(c => {
        const lv = draft[`level_${c.id}`] !== undefined ? draft[`level_${c.id}`] : (d[`level_${c.id}`] || "");
        if (lv) {
          const skill = skillMap[c.name] || c.name;
          items.push({ skill, level: lv });
        }
      });

      let mainLevel = 'C';
      if (items.some(i => i.level === 'T')) mainLevel = 'T';
      else if (items.some(i => i.level === 'H' || i.level === 'Đ')) mainLevel = 'H';

      return { 
        type: viewMode,
        level: mainLevel,
        data: items,
        note
      };
    }

    return { type: 'unknown', level: 'C', data: null, note };
  };

  // ===== VALIDATE & PARSE PROMPT =====
  const keywords = parsePromptKeywords(aiPrompt);

  if (keywords.length === 0) {
    showToast('⚠️ Vui lòng nhập từ khóa phù hợp với môn học/năng lực/phẩm chất (VD: công|nhân|giải toán)', 'warning', '⚠️', 9000);
    return false;
  }

  // ===== BUILD BASIC COMMENTS =====
  const basicComments = {};
  allTargets.forEach(stu => {
    const info = getStudentInfo(stu);

    if (info.level) {
      if (info.type === 'subject' || info.type === 'vnedu_single') {
        const selectedKeyword = keywords[Math.floor(Math.random() * keywords.length)];
        const usedComments = {};
        const comment = generateUniqueComment(info.level, selectedKeyword, usedComments);
        basicComments[stu.id] = { 
          comment, 
          level: info.level, 
          type: info.type,
          note: info.note
        };
      } else {
        const selectedKeyword = keywords[Math.floor(Math.random() * keywords.length)];
        basicComments[stu.id] = { 
          comment: null,
          level: info.level,
          type: info.type,
          data: info.data,
          keyword: selectedKeyword,
          note: info.note
        };
      }
    }
  });

  if (Object.keys(basicComments).length === 0) {
    showToast('❌ Không có học sinh nào để tạo nhận xét', 'error', '❌', 4000);
    return false;
  }

  // ===== GROQ BATCH PROCESSING =====
  const BATCH_SIZE = 15;
  const commentIds = Object.keys(basicComments);
  const batchCount = Math.ceil(commentIds.length / BATCH_SIZE);
  const allUpdates = {};
  let totalSuccessCount = 0;

  for (let batchIdx = 0; batchIdx < batchCount; batchIdx++) {
    const start = batchIdx * BATCH_SIZE;
    const end = Math.min(start + BATCH_SIZE, commentIds.length);
    const batchIds = commentIds.slice(start, end);
    
    const batchData = {};
    batchIds.forEach(id => {
      batchData[id] = basicComments[id];
    });

    let commentsList = "";
    let isSmAsMode = false;

    Object.entries(batchData).forEach(([sId, data]) => {
      if (data.comment) {
        const noteStr = data.note ? ` (Ghi chú: ${data.note})` : '';
        commentsList += `${sId}|${data.comment}${noteStr}\n`;
      } else if (data.data) {
        const skillsStr = data.data.map(i => `${i.skill}:${i.level}`).join(', ');
        const noteStr = data.note ? ` (Ghi chú: ${data.note})` : '';
        commentsList += `${sId}|Mức ${data.level}|${skillsStr}${noteStr}\n`;
        isSmAsMode = true;
      }
    });

    const systemPrompt = isSmAsMode
      ? `Bạn là giáo viên tiểu học Việt Nam. SỬA LẠI nhận xét từ công việc/kỹ năng.
HƯỚNG DẪN THEO MỨC:
  MỨC T: Khen điểm nổi bậc.
  MỨC H/Đ: Khen điểm nổi bật và nêu hướng phát huy.
  MỨC C: Khen cố gắng, nêu hạn chế, nêu hướng khắc phục.
RULE QUAN TRỌNG: 
- MỖI nhận xét PHẢI khác nhau hoàn toàn, không lặp.
- Hãy sửa lại câu cho đúng cấu trúc ngữ pháp.
- Nếu câu gốc sai chính tả, thiếu chữ, hoặc chưa rõ nghĩa → PHẢI tự hiểu và viết lại thành câu hoàn chỉnh, rõ nghĩa.
- KHÔNG giữ nguyên câu sai.
- PHẢI có 15-17 từ
- Bắt đầu "Em"
- Nếu có "(Ghi chú: ...)" thì TÍCH HỢP tự nhiên vào nhận xét, VÍ DỤ thay vì nói "nhẩm nhanh" ở cuối, hãy viết "với khả năng nhẩm nhanh rất tốt"
- XÓA tất cả dấu ngoặc []
- KHÔNG để "(Ghi chú: ...)" trong kết quả final
- Không để response rỗng
- OUTPUT MỖI EM 1 DÒNG: [ID]|||[Nhận xét 15-17 từ]`
      : `Sửa lại các nhận xét tiểu học cho hay hơn, tự nhiên hơn.
RULE QUAN TRỌNG:
- MỖI nhận xét PHẢI khác nhau hoàn toàn, không lặp.
- Hãy sửa lại câu cho đúng cấu trúc ngữ pháp.
- Nếu câu gốc sai chính tả, thiếu chữ, hoặc chưa rõ nghĩa → PHẢI tự hiểu và viết lại thành câu hoàn chỉnh, rõ nghĩa.
- KHÔNG giữ nguyên câu sai.
- Giữ nguyên ý chính, mức đánh giá
- PHẢI có 15-17 từ
- Nếu có "(Ghi chú: ...)" thì TÍCH HỢP tự nhiên vào câu, VÍ DỤ thay vì nói "nhẩm nhanh" ở cuối, hãy viết "với khả năng nhẩm nhanh rất tốt"
- XÓA tất cả dấu ngoặc [] và "(Ghi chú: ...)"
- Không để response rỗng
- OUTPUT MỖI EM 1 DÒNG: [ID]|||[Nhận xét 20-25 từ]`;

    const userInstruction = `Dữ liệu nhận xét (ID|thông tin):
${commentsList}

${isSmAsMode ? 'Nâng cấp nhận xét, mỗi em PHẢI khác nhau, 60-70 từ' : 'Sửa lại để hay hơn, mỗi em PHẢI khác nhau, 60-70 từ'}.
Tích hợp ghi chú nếu có, xóa dấu ngoặc.
KHÔNG để rỗng!`;

    let retryCount = 0;
    const maxRetries = 3;
    let responseText = null;

    while (retryCount < maxRetries && !responseText) {
      try {
        console.log(`📢 Groq Batch ${batchIdx + 1}/${batchCount} (lần ${retryCount + 1})...`);
        showToast(`⏳ Batch ${batchIdx + 1}/${batchCount} (lần ${retryCount + 1})`, 'info', '📊', 1000);

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({ 
            model: 'llama-3.3-70b-versatile',
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: userInstruction }
            ],
            temperature: 0.7,
            max_tokens: 4000,
            top_p: 0.9,
            frequency_penalty: 0.5
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const result = await response.json();
        const text = result.choices?.[0]?.message?.content || "";
        
        if (isValidBatchResponse(text)) {
          responseText = text;
          console.log(`✅ Response hợp lệ`);
        } else {
          console.warn(`⚠️ Response không hợp lệ, retry...`);
          retryCount++;
          if (retryCount < maxRetries) {
            await delay(1000);
          }
        }

      } catch (error) {
        console.warn(`❌ Error batch ${batchIdx + 1}:`, error.message);
        retryCount++;
        if (retryCount < maxRetries) {
          await delay(1000);
        }
      }
    }

    // PARSE RESPONSE
    if (responseText) {
      const lines = responseText.split('\n').filter(line => line.trim() && line.includes('|||'));
      
      lines.forEach(line => {
        const parts = line.split('|||');
        if (parts.length >= 2) {
          let sId = parts[0].trim();
          
          if (/^\d+$/.test(sId)) {
            const idx = parseInt(sId) - 1;
            const batchIds_ = Object.keys(batchData);
            if (idx >= 0 && idx < batchIds_.length) {
              sId = batchIds_[idx];
            }
          }
          
          let comment = parts.slice(1).join('|||').trim();
          
          if (isValidComment(comment) && Object.keys(batchData).includes(sId)) {
            comment = comment.replace(/\[.*?\]/g, '').trim();
            
            if (!comment.toLowerCase().startsWith('em')) {
              comment = 'Em ' + comment.charAt(0).toLowerCase() + comment.slice(1);
            }
            
            allUpdates[sId] = comment;
            totalSuccessCount++;
            console.log(`✅ ${sId}: ${comment.substring(0, 50)}...`);
          }
        }
      });
    }

    // FALLBACK
    for (const sId of batchIds) {
      if (!allUpdates[sId]) {
        const data = basicComments[sId];
        if (data.comment) {
          allUpdates[sId] = data.comment;
          totalSuccessCount++;
        }
      }
    }

    if (batchIdx < batchCount - 1) {
      await delay(2000);
    }
  }

  // FINAL UPDATE
  const finalUpdates = {};
  for (const [sId, data] of Object.entries(basicComments)) {
    finalUpdates[sId] = allUpdates[sId] || data.comment || 'Em có nỗ lực học tập và tiến bộ tích cực.';
    if (!allUpdates[sId] && data.comment) {
      totalSuccessCount++;
    }
  }

  setDraftData(prev => {
    const updated = { ...prev };
    for (const sId of Object.keys(finalUpdates)) {
      updated[sId] = {
        ...(prev[sId] || {}),
        comment: finalUpdates[sId]
      };
    }
    return updated;
  });

  showToast(`✅ Tạo nhận xét: ${totalSuccessCount}/${Object.keys(finalUpdates).length}`, 'success', '✅', 3000);
  console.log(`✅ Hoàn thành: ${totalSuccessCount}/${Object.keys(finalUpdates).length}`);

  return true;
};
